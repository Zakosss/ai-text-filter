import express from "express";
import api from "./api";

const router = express.Router();

router.use("/api", api);
router.all("*", (req, res) => {
  if (req.method === "GET") {
    res.status(404).send("Not Found");
  } else {
    res.status(405).send("Method Not Allowed");
  }
});

export default router;
