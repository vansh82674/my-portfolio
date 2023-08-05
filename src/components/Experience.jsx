import React from "react";
import reactLogo from "../assets/portfolio/reactLogo.png";
import nextjsLogo from "../assets/portfolio/nextjsLogo.png";
import graphQLLogo from "../assets/portfolio/graphQLLogo.png";
import tailwindLogo from "../assets/portfolio/tailwindLogo.png";
import mongoLogo from "../assets/portfolio/mongoLogo.png";
import nodejsLogo from "../assets/portfolio/nodejsLogo.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: reactLogo,
      title: "REACTJS",
    },

    {
      id: 2,
      src: nextjsLogo,
      title: "NEXT JS",
    },
    {
      id: 3,
      src: graphQLLogo,
      title: "GraphQL",
    },
    {
      id: 4,
      src: tailwindLogo,
      title: "TAILWIND CSS",
    },
    {
      id: 5,
      src: mongoLogo,
      title: "MONGODB",
    },
    {
      id: 6,
      src: nodejsLogo,
      title: "NODE JS",
    },
  ];

  return (
    <div
      id="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl p-2 font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0 ">
          {experience.map(({ id, src, title }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg hover:scale-105 duration-500 py-2">
                <img
                  src={src}
                  className="w-full mx-auto rounded-lg"
                  alt=""
                />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
