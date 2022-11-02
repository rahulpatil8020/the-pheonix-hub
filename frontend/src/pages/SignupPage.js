import React from "react";
import loginImage from "../assets/loginimage.jpeg";

const SignupPage = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={loginImage} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form action="">
            <h2 className="text-4xl font-bold text-center mb-8">Pheonix</h2>
            <div className="grid grid-cols-2 m-auto">
              <input
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="Username"
              />
              <input
                className="border p-2 "
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 my-4">Sign Up</button>

            <p className="text-center cursor-default hover:text-indigo-600">
              Already Have An Account?
            </p>
            <p className="text-center underline text-indigo-600 cursor-pointer">
              Sign Up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
