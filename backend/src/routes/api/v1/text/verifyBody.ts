import PathParams from 'express'

// We can use the body with confidence now! We also don't have to do verification in each route now.

export default async function verifyBody(req: PathParams.Request, res: PathParams.Response, next: PathParams.NextFunction): Promise<void> {
    const { text = "" } = req.body || {};

    req.body = {
        text: text,
    }

    next();
}
