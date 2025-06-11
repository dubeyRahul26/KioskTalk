import { useNavigate } from "react-router-dom";
import {
  generateSessionId,
  saveIsCompletedFlag,
  saveSessionId,
} from "../utils/storage";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const id = generateSessionId();
    saveSessionId(id);
    saveIsCompletedFlag();
    await fetch("http://localhost:4000/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Session Creation response:", data.message);
      })
      .catch((err) => {
        console.error("Error creating session:", err);
      });
    navigate("/survey");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="text-center bg-white p-8 sm:p-10 rounded-xl shadow-md w-full max-w-md">
        <span className="text-5xl sm:text-6xl mb-6 block">📝</span>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Welcome!
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          We value your feedback. Please take a quick survey.
        </p>

        <button
          onClick={handleClick}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-200"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
