import express from "express";
import {
  getQuestions,
  submitAnswer,
  completeSurvey,
  createSession
} from "../controllers/surveyController.js";

const router = express.Router();

router.get("/questions", getQuestions);
router.post("/answer", submitAnswer);
router.post("/complete", completeSurvey);
router.post("/session", createSession); 

export default router;
