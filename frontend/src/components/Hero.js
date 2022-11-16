import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-indigo-600 font-bold p-2">
          GROWING WITH PROGRAMMING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl fontbold md:py-6">
          Grow with Code
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, Seemless coding in
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-indigo-600"
            strings={["C++", "Java", "Python", "Javascript"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 py-2">
          writing the code the way you want
        </p>
        <Link to="/competitions">
          <button className="w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
