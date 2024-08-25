/* eslint-disable no-unused-vars */

import Header from "./components/Header";
import Mainz from "./components/Mainz";

import { QuizContextProvider, useQuiz } from "./contexts/QuizContext";

export default function App() {
  return (
    <QuizContextProvider>
      <div className="app">
        <Header />
        <Mainz />
      </div>
    </QuizContextProvider>
  );
}
