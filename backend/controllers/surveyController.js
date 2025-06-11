import Question from "../models/Question.js";
import Response from "../models/Response.js";
import Session from "../models/session.js";

export const getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

export const submitAnswer = async (req, res) => {

  const { sessionId, questionId, answer } = req.body;

  if (!sessionId || !questionId) {
    return res.status(400).json({ error: "Missing sessionId or questionId" });
  }

  await Response.create({ sessionId, questionId, answer });
  res.json({ success: true });
};

export const completeSurvey = async (req, res) => {
  
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: "Missing sessionId" });
  }

  try {
    
    const session = await Session.findOne({ sessionId });

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.status === "COMPLETED") {
      return res.status(200).json({ message: "Survey already completed" });
    }

    session.status = "COMPLETED";
    await session.save();

    console.log(`Session ${sessionId} marked as COMPLETED.`);
    res.json({ success: true });

  } catch (error) {
    console.error("Error completing survey:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createSession = async (req, res) => {
  
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: "Missing sessionId" });
  }

  try {
    const existing = await Session.findOne({ sessionId });

    if (existing) {
      return res.status(200).json({ message: "Session already exists" });
    }

    const session = new Session({ sessionId });
    await session.save();

    res.status(201).json({ message: "Session created" });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ error: "Failed to create session" });
  }
};
