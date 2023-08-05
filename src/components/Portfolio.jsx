import React from "react";
import reactLogo from "../assets/portfolio/reactLogo.png";
import nextjsLogo from "../assets/portfolio/nextjsLogo.png";
import graphQLLogo from "../assets/portfolio/graphQLLogo.png";
import tailwindLogo from "../assets/portfolio/tailwindLogo.png";
import mongoLogo from "../assets/portfolio/mongoLogo.png";
import nodejsLogo from "../assets/portfolio/nodejsLogo.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: reactLogo,
    },
    {
      id: 2,
      src: nextjsLogo,
    },
    {
      id: 3,
      src: tailwindLogo,
    },
    {
      id: 4,
      src: graphQLLogo,
    },
    {
      id: 5,
      src: nodejsLogo,
    },
    {
      id: 1,
      src: mongoLogo,
    },
  ];

  return (
    <div
      id="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 md:h-screen text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work Here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
        sm:px-0 "
        >
          {portfolio.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-lg w-full  hover:scale-105 duration-300"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Code
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
