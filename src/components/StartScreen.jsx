/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { questions, dispatch } = useQuiz();

  const numQuestions = questions.length;
  // const maxPossiblePoints = questions.reduce((prev, cur) => {
  //   return prev + cur.points;
  // }, 0);

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>
        {numQuestions} question{numQuestions <= 1 ? "" : "s"} to test your
        Reactmastery
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
