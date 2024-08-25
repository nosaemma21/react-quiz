/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
