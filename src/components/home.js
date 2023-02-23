import * as React from "react";

const Home = ({handleShowQuiz}) => {
  return (
      <div className="text-center pt-11 px-2">
        <h1 className="text-3xl lg:text-7xl font-bold text-white py-5">Welcome to this Game</h1>
        <div className="text-xl lg:text-5xl font-bold text-white py-5">You will be presented with 15 true or false questions</div>
        <div className="text-xl lg:text-5xl font-bold text-white py-5">Can you score a 100% ?</div>
        <button onClick={handleShowQuiz} className="text-xl mt-10 font-bold text-white bg-black hover:bg-red-600 p-5 rounded-xl">BEGIN</button>
      </div>
  );
};

export default Home;
