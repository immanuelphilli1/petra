import * as React from "react";

const Resultss = ({ total, numberOfQuestions, results, answers }) => {
  return (
    <div className="text-center pt-11 px-2 lg:mx-[30%]">
      <h1 className="text-3xl lg:text-7xl font-bold text-white py-5">Result</h1>
      <div className="text-xl lg:text-5xl font-bold text-white py-5">
        You scored : {Math.floor((total / numberOfQuestions) * 100)}%
      </div>
      <div className="text-xl lg:text-5xl font-bold text-white py-5">
        {total}/{numberOfQuestions}
      </div>
      <div className="text-xl lg:text-5xl font-bold py-5">List of Answers</div>
      {answers.map((answer, index) => (
        <div className="flex items-center gap-3 m-2">
          {results[index] === "correct" ? 
          <svg className="w-8 h-8 bg-green-700 rounded-full p-2"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg> : 
        <svg className="w-8 h-8 bg-red-700 rounded-full p-2"
      fill="white"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>}
          <div>
            Question {index + 1}: Your Answer: {answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resultss;
