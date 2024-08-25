/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, points, answer, numQuestions, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
