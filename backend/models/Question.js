import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ["rating", "text"], required: true },
  max: Number
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
