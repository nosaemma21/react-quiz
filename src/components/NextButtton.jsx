/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useQuiz } from "../contexts/QuizContext";

export default function NextButtton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}
