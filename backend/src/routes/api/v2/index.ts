import { Router } from "express";

const router = Router()

router.route('/:category/:type')
    .post((req, res) => {
        console.log(req.params);
        
        res.sendStatus(200);
    });

export default router;