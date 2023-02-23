import * as React from "react";
import Home from "../components/home";
import Quiz from "../components/quiz";
import Resultss from "../components/result";

const IndexPage = () => {
  // logic to display components as and when
  const [showQuiz, setShowQuiz] = React.useState(false);
  // total number of questions presented
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(0);
  // questions counter
  const [counter, setCounter] = React.useState(0);
  // State to handle call to localStorage for questions
  const [quizQuestions, setQuizQuestions] = React.useState([]);
  // correct answer counter
  const [answered, setAns] = React.useState(0);
  // state to track correct answers
  const [correctAnswer, setCorrectAnswer] = React.useState([]);
  // state to track provided answers
  const [providedAnswer, setProvidedAnswer] = React.useState([]);

  // functions to handle state for each question
  function handleFalse() {
    setCounter(counter + 1);
    Marking("False");
  }
  function handleTrue() {
    console.log("Page :", correctAnswer);
    setCounter(counter + 1);
    Marking("True");
  }

  // function to handle correct answer counter
  function Marking(answer) {
    if (quizQuestions[counter].correct_answer === answer) {
      setCorrectAnswer((previous) => [...previous, "correct"]);
      setProvidedAnswer((previous) => [...previous, answer]);
      // count answer
      setAns(answered + 1);
      localStorage.setItem("correct_answer", JSON.stringify(correctAnswer));
    } else {
      setCorrectAnswer((previous) => [...previous, "wrong"]);
      setProvidedAnswer((previous) => [...previous, answer]);
      localStorage.setItem("correct_answer", JSON.stringify(correctAnswer));
    }
  }

  // useEffect handles initial request and saves it to localStorage
  React.useEffect(() => {
    // try catch request handler to manage API error
    try {
      async function petraQuestions() {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean`,

          {
            method: "GET",
          }
        );
        const data = await response.json();
        setNumberOfQuestions(data.results.length);

        // saving DATA  to localStarage
        localStorage.setItem("petraQuestions", JSON.stringify(data.results));
        localStorage.setItem("correct_answer", JSON.stringify([]));
      }

      petraQuestions();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // function to handle BEGIN button click
  function handleShowQuiz() {
    setShowQuiz(true);
    setQuizQuestions(JSON.parse(localStorage.getItem("petraQuestions")));
  }

  return (
    <main className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-cyan-500 min-h-screen mx-auto">
      {showQuiz === false ? (
        <Home handleShowQuiz={handleShowQuiz} />
      ) : counter < 15 ? (
        <>
          <h1 className="flex justify-center text-3xl lg:text-7xl font-bold text-white py-5">
            Quiz
          </h1>
          {quizQuestions.map((data, index) => {
            if (index === counter) {
              return (
                <div key={index}>
                  <Quiz
                    category={data.category}
                    question={data.question}
                    handleFalse={handleFalse}
                    handleTrue={handleTrue}
                    page={index}
                    totalQuestions={numberOfQuestions}
                  />
                </div>
              );
            }
          })}
        </>
      ) : (
        <Resultss
          total={answered}
          numberOfQuestions={numberOfQuestions}
          results={correctAnswer}
          answers={providedAnswer}
        />
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Petra Quiz</title>;
