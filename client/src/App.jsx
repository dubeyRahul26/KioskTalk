import { Routes, Route, Navigate } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import SurveyScreen from "./pages/SurveyScreen";
import ThankYouScreen from "./pages/ThankYouScreen";
import { getIsCompletedFlag, getSessionId } from "./utils/storage";

const RequireSession = ({ children }) => {
  const sessionId = getSessionId();
  return sessionId ? children : <Navigate to="/" replace />;
};

const RequireSurveyCompleted = ({ children }) => {
  const isCompleted = getIsCompletedFlag() === "true";
  return isCompleted ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route
        path="/survey"
        element={
          <RequireSession>
            <SurveyScreen />
          </RequireSession>
        }
      />
      <Route
        path="/thank-you"
        element={
          <RequireSurveyCompleted>
            <ThankYouScreen />
          </RequireSurveyCompleted>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
