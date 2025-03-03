import { Router } from "express";
import explicitness from "./explicitness";

const router = Router()

router.use('/explicitness', explicitness);

export default router;