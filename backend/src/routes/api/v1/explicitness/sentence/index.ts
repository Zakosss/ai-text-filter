import { Router } from "express";
import getMultiple from "./getMultiple";

const router = Router()

router.post('/', getMultiple)

export default router;