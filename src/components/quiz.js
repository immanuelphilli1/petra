import * as React from "react";

const Quiz = ({category, question, handleFalse, handleTrue, page, totalQuestions}) => {
  return (
    
    <div className="text-center pt-11 px-2">
    <div className="text-xl lg:text-4xl font-bold text-white py-5">{category}</div>
    <div className="text-xl lg:text-3xl font-bold text-white py-5">{question}</div>
    <div className="flex gap-5 justify-center items-center py-10">
      <button onClick={handleTrue} className="rounded-full bg-green-500 hover:bg-green-700 text-white p-5">True</button>
      <button onClick={handleFalse} className="rounded-full bg-red-500 hover:bg-red-700 text-white p-5">False</button>
    </div>
    <div className="pt-10 ">{page+1}/{totalQuestions}</div>
  </div>
  );
};

export default Quiz;
