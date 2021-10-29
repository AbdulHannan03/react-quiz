import React, { useState } from "react";
import "./App.css";


function App() {
  const [questions, setQuestions] = useState([
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext markup langauge",
        "Programming langauge",
        "markup language",
      ],
      correctAns: "Hypertext markup langauge",
    },
    {
      question: "Pakistan Won From India By ______________ Wickets",
      options: [
        "2",
        "8",
        "10",
      ],
      correctAns: "10",
    },
    {
      question: "Pakistan Fixed Newzlands _____________ issue",
      options: [
        "Anger",
        "Security",
        "Political"],
      correctAns: "Security",
    },
  ]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  function checkAnswer() {
    let correctValue = questions[ind].correctAns;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  return (
    <div className="App">
      <div className="p-2">
        <div className="container">
          {showResult ? (
            <div className="p-3 bg-warning rounded shadow text-dark">
              <p className="fs-3">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={questions.length}
              ></progress>
              <h3>{((score / questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-primary text-white">
            <p className="fs-4">
              Question Number <span className="fs-4">{ind + 1}</span> of{" "}
              {questions.length}
            </p>
            <h3>{questions[ind].question}</h3>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-info">
            <div className="row">
              {questions[ind].options.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-2">
                    <button
                      onClick={() => setSelectedValue(e)}
                      className="btn btn-light rounded px-5"
                    >
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container">
            <button
              className="btn btn-danger p-2 rounded-pill"
              onClick={() => checkAnswer()}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
