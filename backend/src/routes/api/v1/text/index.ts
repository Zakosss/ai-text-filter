import express from "express";

const router = express.Router();

import check from "./check";
import replace from "./replace";
import verifyBody from "./verifyBody";

router.use(verifyBody);

router.post("/check", check);
router.post("/replace", replace);

export default router;
