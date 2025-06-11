import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearIsCompletedFlag, clearSessionId } from "../utils/storage";

const ThankYouScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      clearSessionId();
      clearIsCompletedFlag();
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
          Thank You!
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          We appreciate your feedback. Your responses have been recorded.
        </p>
        <p className="text-gray-400 text-xs">You’ll be redirected shortly...</p>
      </div>
    </div>
  );
};

export default ThankYouScreen;
