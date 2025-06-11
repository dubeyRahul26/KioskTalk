import { useEffect, useState } from "react";
import { getSessionId, saveIsCompletedFlag } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const SurveyScreen = () => {
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionId, setSessionId] = useState();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/questions")
      .then((res) => res.json())
      .then(setQuestions);
    setSessionId(getSessionId());
  }, []);

  const handleRatingClick = (value) => {
    setSelectedAnswer(value);
    handleAnswer(value);
  };

  const handleAnswer = (answer) => {
    const questionId = questions[currentIndex]._id;
    console.log("Question Id : ", questionId);

    const updated = { ...answers, [questionId]: answer };
    setAnswers(updated);

    console.log("Answers :", updated);

    console.log("Session Id :", sessionId);

    fetch("http://localhost:4000/api/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, questionId, answer }),
    });
  };

  const handleSkip = () => {
    handleAnswer(null);
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
    setSelectedAnswer(null);
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = async () => {
    if (!window.confirm("Submit your responses?")) return;

    try {
      // Submit null for unanswered questions
      const unanswered = questions.filter((q) => !(q._id in answers));
      for (let q of unanswered) {
        await fetch("http://localhost:4000/api/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            questionId: q._id,
            answer: null,
          }),
        });
      }

      // Submit completion status
      await fetch("http://localhost:4000/api/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      console.log("Survey submitted successfully.");
      saveIsCompletedFlag();
      navigate("/thank-you");
    } catch (e) {
      console.error("Error submitting survey:", e);
    }
  };

  if (!questions.length)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading questions...
      </div>
    );

  const question = questions[currentIndex];
  const total = questions.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-8">
      <div className="w-full max-w-2xl p-6 md:p-10 bg-white rounded-lg shadow-md text-center">
        <div className="relative mb-6">
          <h2 className="text-lg sm:text-2xl font-bold">Customer Survey</h2>
          <div className="absolute right-0 top-full mt-1 text-sm sm:text-base font-medium pr-1">
            {currentIndex + 1} / {total}
          </div>
        </div>

        <p className="mb-6 mt-8 text-base sm:text-md font-medium">
          {question.text}
        </p>

        {question.type === "rating" && (
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {[...Array(question.max)].map((_, i) => {
              const value = i + 1;
              const isSelected = selectedAnswer === value;
              return (
                <button
                  key={value}
                  className={`px-4 py-2 rounded text-sm sm:text-base transition-colors duration-200 ${
                    isSelected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-black"
                  }`}
                  onClick={() => handleRatingClick(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        )}

        {question.type === "text" && (
          <textarea
            className="w-full p-3 border border-gray-300 rounded mb-6 text-sm sm:text-base"
            onBlur={(e) => handleAnswer(e.target.value)}
            placeholder="Your answer..."
            rows={4}
          />
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded text-sm sm:text-base disabled:opacity-50"
          >
            Back
          </button>

          <button
            onClick={handleSkip}
            className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-sm sm:text-base"
          >
            Skip
          </button>

          {currentIndex === total - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded text-sm sm:text-base"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded text-sm sm:text-base"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyScreen;
