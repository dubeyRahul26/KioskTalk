import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  answer: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

const Response = mongoose.model("Response", responseSchema);
export default Response;
