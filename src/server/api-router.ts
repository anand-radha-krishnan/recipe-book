import express from "express";
import testData from "../test-data.json";

const router = express.Router();

router.get("/reciepes", (req, res) => {
  res.send(testData);
});

// router.get('/api/reciepe')

export default router;
