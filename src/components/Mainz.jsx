/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import Progress from "./Progress";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Question from "./Question";
import NextButtton from "./NextButtton";

function Mainz() {
  const { status } = useQuiz();
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButtton />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}

export default Mainz;
