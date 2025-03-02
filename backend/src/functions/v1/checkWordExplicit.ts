import { openaiClient, prismaClient } from "@/index";
import { Score } from "@prisma/client";
import OpenAI from "openai";

import RatingResponse from "@/types/ratingResponse";

export default async (wordString: string): Promise<Score> => {
    wordString = wordString.toLowerCase().replace(/\s+/g, ' ')

    const word = await prismaClient.textItem.findUnique({
        where: {
            string: wordString,
            type: 'WORD'
        },
        include: {
            scores: {
                where: {
                    type: 'EXPLICIT'
                }
            }
        }
    })
    
    const explicitScore = word?.scores[0]

    if (explicitScore !== undefined) {
        return explicitScore
    } else {
        const params: OpenAI.Chat.ChatCompletionCreateParams = {
            messages: [
                { role: 'system', content: '"Explicit content" refers to something that, when clearly shown without censoring, would be considered inappropriate for some viewers or listeners. Violence, nudity, and swearing are sometimes referred to as explicit content.' },
                { role: 'system', content: 'You are a tool to rate the explicitness of a word from 0 to 1 as a float.' },
                { role: 'system', content: 'You must also return a reason behind the rating.' },
                { role: 'system', content: `You must return in json format: { "score": 0, "reason": "The word 'word'..." }` },
                { role: 'user', content: wordString }
            ],
            model: 'gpt-4o-mini',
            seed: 0,
            temperature: 1
        }

        const chatCompletion: OpenAI.Chat.ChatCompletion = await openaiClient.chat.completions.create(params)
        const ratingResponse: RatingResponse = JSON.parse(chatCompletion.choices[0]?.message.content!)

        if (word === null) {
            const createdWord = await prismaClient.textItem.create({
                data: {
                    string: wordString,
                    type: 'WORD',
                    scores: {
                        create: {
                            type: 'EXPLICIT',
                            value: ratingResponse.score,
                            reason: ratingResponse.reason
                        }
                    }
                },
                include: {
                    scores: {
                        where: {
                            type: 'EXPLICIT'
                        }
                    }
                }
            })

            return createdWord.scores[0]
        } else {
            const createdScore = await prismaClient.score.create({
                data: {
                    type: 'EXPLICIT',
                    value: ratingResponse.score,
                    reason: ratingResponse.reason,
                    textItemId: word.id
                }
            })

            return createdScore
        }
    }
}