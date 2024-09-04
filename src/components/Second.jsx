import React from "react";

function Second() {
  return (
    <div className="h-auto w-full bg-white p-5">
      <div className="flex flex-col md:flex-row w-full 2xl:justify-center lg:items-center ">
        <div className="relative p-5 h-auto flex ">
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-02.jpg"
            className="w-72 h-52 sm:w-80 sm:h-60 md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] absolute z-20 object-cover"
          />
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-01.jpg"
            className="w-96 h-60 sm:w-96 sm:h-64 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] z-40 relative p-5 mt-24 md:mt-36 lg:mt-48 md:left-28 lg:left-36 left-8 object-cover"
          />
        </div>
        <div className="p-10 md:ml-48  bg-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  leading-snug sm:leading-normal md:leading-loose font-bold w-full md:max-w-[700px] lg:max-w-[700px]">
            A Trading Community <br className="hidden md:block" />
            Dedicated To Your <br className="hidden md:block" />
            Success!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 md:max-w-[700px] xl:leading-10 sm:mt-3 md:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-green-300 rounded-xl p-3 sm:mt-4 md:mt-8">
            Explore Membership
          </button>
        </div>
      </div>
    </div>
  );
}

export default Second;
