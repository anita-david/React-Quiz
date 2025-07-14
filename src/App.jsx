import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Error from "./Error";
import Loader from "./Loader";
import ScreenStart from "./ScreenStart";

const initialState = {
  questions: [],
  // 'loading', 'ready', 'error', 'active', 'finished'
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Unknown action");
  }
}
export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  useEffect(function () {
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        console.error(err);
      }
    }
    getQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainContent >
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && <ScreenStart numQuestions={numQuestions} />}
        
      </MainContent>
    </div>
  );
}
