import React from "react";

const BoxComponent = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Beginning</h2>
      </div>

      {/* Bar Graph */}
      <div className="flex flex-row justify-between items-end mb-4 w-full max-w-xs h-40 space-x-4">
        {/* Bars */}
        <div
          className="w-1/4 bg-blue-500 rounded"
          style={{ height: "30%" }}
        ></div>
        <div
          className="w-1/4 bg-blue-500 rounded"
          style={{ height: "50%" }}
        ></div>
        <div
          className="w-1/4 bg-blue-500 rounded"
          style={{ height: "70%" }}
        ></div>
        <div
          className="w-1/4 bg-blue-500 rounded"
          style={{ height: "90%" }}
        ></div>
      </div>

      {/* Text */}
      <div className="text-center mb-4">
        <p className="text-lg font-bold">
          The best place to learn to trade. Period.
        </p>
      </div>

      {/* Paragraph */}
      <div className="text-center">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default BoxComponent;
