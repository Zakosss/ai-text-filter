import { Router } from "express";
import getOne from "./getOne";
import getMultiple from "./getMultiple";

const router = Router()

router.get('/:string', getOne)
router.post('/', getMultiple)

export default router;