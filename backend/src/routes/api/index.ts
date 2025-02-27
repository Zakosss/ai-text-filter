import { Router } from "express";
import v1 from "./v1";

const router = Router()

router.use('/v1', v1);
router.use('/', v1); // Use v1 as default version

export default router;