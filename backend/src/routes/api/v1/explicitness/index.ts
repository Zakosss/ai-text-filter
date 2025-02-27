import { Router } from "express";
import sentence from "./sentence";
import word from "./word";

const router = Router()

router.use('/sentence', sentence);
router.use('/word', word);

export default router;