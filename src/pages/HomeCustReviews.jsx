import React from "react";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440] flex flex-col items-center">
        <div className="">
          <div>
            <h1 className="flex justify-center mt-32 mb-24 text-5xl font-semibold">Customer Reviews</h1>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;
