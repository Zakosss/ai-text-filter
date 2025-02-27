import { Request, Response } from 'express';
import checkWord from '@/functions/checkWord';
import createReturnData from '@/functions/createReturnData';

export default async (req: Request, res: Response) => {
    const { string } = req.params;
    const score = await checkWord(string);
    const returnData = createReturnData('Success', { score: score.explicitness, reason: score.explicitnessReasoning });
    res.status(200).json(returnData);
}