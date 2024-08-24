import React from "react";
import ProductBox from "./ProductBox";
import Review from "./Reviews";

const BenefitsPage = () => {
  return (
    <div className="bg-green-100 py-10 px-5 md:mt-28 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 md:mt-24">
          Benefits of joining our course
        </h2>
        <p className="text-gray-500 mt-4 md:mt-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec
          <br className="hidden md:block" /> ullamcorper mattis, pulvinar
          dapibus leo.
        </p>
      </div>

      <div className="flex  justify-between flex-wrap flex-cols-2 gap-4 p-4 md:justify-between items-center md:mt-20 w-full md:w-[50%] mx-auto mb-10">
        <div className=" md:text-left">
          <div className="text-4xl md:text-3xl text-teal-900 font-bold">
            12+
          </div>
          <div className="text-gray-500 text-sm md:text-base">
            New Lessons Weekly
          </div>
        </div>
        <div className=" md:text-left">
          <div className="text-4xl md:text-3xl text-teal-900 font-bold">
            50M+
          </div>
          <div className="text-gray-500 text-sm md:text-base">Views Videos</div>
        </div>
        <div className=" md:text-left">
          <div className="text-4xl md:text-3xl text-teal-900 font-bold">
            535K+
          </div>
          <div className="text-gray-500 text-sm md:text-base">
            Total Subscribers
          </div>
        </div>
        <div className=" md:text-left">
          <div className="text-4xl md:text-3xl text-teal-900 font-bold">
            2K+
          </div>
          <div className="text-gray-500 text-sm md:text-base">
            Lessons Video
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:mt-5 md:space-y-0 justify-center lg:w-[1700px] mx-auto">
        {/* First Box */}
        <div className="w-80 md:w-72 lg:w-[570px] h-96 md:h-80 lg:h-[500px] bg-teal-900 text-white flex flex-col justify-between rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
          <div className="flex flex-col  justify-between h-full">
            <div className="p-5 md:absolute">
              <h1 className="text-xl md:text-4xl font-bold text-white mt-10">
                Discuss charts in <br /> our channels
              </h1>
              <p className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
              </p>
              <p className="text-sm md:text-lg mt-3"> Learn more →</p>
            </div>
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-015-1.png"
              alt="Discuss charts"
              className="md:w-[60.7%] md:h-[52%] md:relative object-fill  w-52  md:top-60  ml-28 md:ml-56"
            />
          </div>
        </div>

        {/* Second Box */}
        <div className="w-80 md:w-72 lg:w-[530px] h-96 md:h-80 lg:h-[500px] bg-teal-900 text-white flex flex-col justify-between rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-between h-full">
            <div className="p-5">
              <h1 className="text-xl md:text-4xl font-bold text-white mt-10">
                Educational videos <br /> Library
              </h1>
              <p className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur <br></br>odio elit
                feugiat diam convallis molestie.
              </p>
              <p className="text-sm md:text-lg mt-3"> Learn more →</p>
            </div>
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-016-1.png"
              alt="Exclusive tools"
              className="md:w-[89%] md:h-[47%] w-52 ml-28 rounded-lg object-fill md:ml-14"
            />
          </div>
        </div>

        {/* Third Box */}
        <div className="w-80 md:w-72 lg:w-[530px] h-96 md:h-80 lg:h-[500px] bg-teal-900 text-white flex flex-col justify-between rounded-lg  shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105">
          <div className="flex flex-col justify-between h-full">
            <div className="p-5">
              <h1 className="text-xl md:text-4xl font-bold text-white mt-10">
                Guidance when you
                <br /> need it
              </h1>
              <p className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur <br /> odio elit feugiat
                diam convallis molestie.
              </p>
              <p className="text-sm md:text-lg mt-3"> Learn more →</p>
            </div>
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-017.png"
              alt="Live webinars"
              className="md:w-[67%] md:h-[46%] object-fill md:ml-44 ml-28 rounded-lg w-52"
            />
          </div>
        </div>
      </div>
      <ProductBox />
      <Review />
    </div>
  );
};

export default BenefitsPage;
