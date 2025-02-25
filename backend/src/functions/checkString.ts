import { word } from "@prisma/client";
import { openai, prisma } from "..";
import OpenAI from "openai";

export default async (
  str: string
): Promise<Map<string, number>> => {
    const words = str.split(" ").map(word => word.replace(/[^\w\d]/g, '').toLowerCase())

    const existingWordEntries = await prisma.word.findMany({
        where: {
            word: {
                in: words
            }
        }
    })

    const existingWords = existingWordEntries.map(entry => entry.word)

    const wordsToGenerateScoresFor = words.filter(word => !existingWords.includes(word))

    const existingWordsWithScores = new Map<string, number>()
    existingWordEntries.forEach(entry => {
        existingWordsWithScores.set(entry.word, entry.explicitScore)
    })

    // Store words with respective positions in original array. Remove words from words array that are already in the database

    if (wordsToGenerateScoresFor.length === 0) {
        return existingWordsWithScores
    }

    const quotedWords = wordsToGenerateScoresFor.map(word => `"${word}"`)

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [
            { role: 'system', content: 'You are a tool for rating the explicitness of words provided to you.' },
            { role: 'system', content: 'Words are provided in an array as such: ["hello", "what", "open"]' },
            { role: 'system', content: 'You then return a rating (0.00 - 1.00) for each word as such: [0,0,0]' },
            { role: 'system', content: 'You must ignore ANY context behind the sentence provided, just rate each word.' },
            { role: 'user', content: `[${quotedWords.join(',')}]` },
        ],
        model: 'gpt-4o-mini',
        seed: 0,
        temperature: 1,
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);

    const generatedScores = JSON.parse(chatCompletion.choices[0].message.content!);
    const wordsWithGeneratedScores = new Map<string, number>()
    wordsToGenerateScoresFor.forEach((word, index) => {
        wordsWithGeneratedScores.set(word, generatedScores[index])
    })

    const toCreate: Array<{word: string, explicitScore: number}> = []

    wordsWithGeneratedScores.forEach((score, word) => {
        if (score === undefined) return
        toCreate.push({
            word: word,
            explicitScore: score
        })
    })

    await prisma.word.createMany({
        data: toCreate
    })

    const wordsWithScores = new Map([...existingWordsWithScores, ...wordsWithGeneratedScores])

    return wordsWithScores
};
