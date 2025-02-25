import express from "express";
import text from "./text";

const router = express.Router();

router.use("/text", text);

export default router;
