import React, { useState } from "react";
import "./QuizComponent.css";
import questions from "../resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

function QuizComponent() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const nextQuestion = () =>
    setNum((prevNum) => (prevNum < 14 ? prevNum + 1 : prevNum));
  const previousQuestion = () =>
    setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
  const onSelectOption = (e) => {
    const selectedAnswer = e.currentTarget.innerText;
    const isCorrect = selectedAnswer === questions[num].answer;
    alert(isCorrect ? "Correct answer" : "Incorrect answer");

    if (!attempted.includes(num)) {
      setAttempted((prevAttempted) => [...prevAttempted, num]);
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    }

    nextQuestion();
  };

  const finishQuiz = () =>
    navigate("/Result", { state: { score, attempted } });

  const onQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/");
    }
  };

  return (
    <div className="quiz flex">
      <div className="quiz-container">
        <h2>Question</h2>
        <div>
          <h4>{num + 1} of 15</h4>
          <p className="question">{questions[num].question}</p>
        </div>
        <div className="options-container">
          {questions[num].options.map((option) => (
            <div
              key={option}
              className="option-div flex"
              onClick={onSelectOption}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="previous-btn" onClick={previousQuestion}>
          {" "}
          Previous{" "}
        </button>
        <button className="next-btn" onClick={nextQuestion}>
          {" "}
          Next{" "}
        </button>
        <button className="quit-btn" onClick={onQuit}>
          {" "}
          Quit{" "}
        </button>
        <button className="finish-btn" onClick={finishQuiz}>
          {" "}
          Finish{" "}
        </button>
      </div>
    </div>
  );
}

export default QuizComponent;
