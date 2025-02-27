import { Request, Response } from 'express';
import checkWord from '@/functions/checkWord';
import createReturnData from '@/functions/createReturnData';

export default async (req: Request, res: Response) => {
    const tasks = []

    for (const word of req.body.words) {
        tasks.push(checkWord(word))
    }

    const scores = await Promise.all(tasks)
    const returnData = createReturnData('Success', scores.map(score => ({ score: score.explicitness, reason: score.explicitnessReasoning })));
    res.status(200).json(returnData);
}