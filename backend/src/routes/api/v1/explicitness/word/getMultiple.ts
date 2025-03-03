import { Request, Response } from 'express';
import checkWord from '@/functions/v1/checkWordExplicit';
import createReturnData from '@/functions/createReturnData';

export default async (req: Request, res: Response) => {
    const tasks = []

    for (const word of req.body.words) {
        tasks.push(checkWord(word))
    }

    const scores = await Promise.all(tasks)
    const returnData = createReturnData('Success', scores.map(score => ({ score: score.value, reason: score.reason })));
    res.status(200).json(returnData);
}