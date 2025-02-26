import checkString from "@/functions/checkString";
import createReturnData from "@/functions/createReturnData";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    const explicitScores = await checkString(req.body.text)
    const scoresOnly = explicitScores.values().toArray();

    res.status(200).json(createReturnData("Success", {
        wordScores: Object.fromEntries(explicitScores),
        averageScore: scoresOnly.reduce((a, b) => a + b, 0) / scoresOnly.length,
        maxScore: Math.max(...scoresOnly),
        minScore: Math.min(...scoresOnly),
    }));
};
// :) sigma