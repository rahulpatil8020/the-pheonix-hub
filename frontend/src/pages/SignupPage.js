import React, { useState } from "react";
import loginImage from "../assets/loginimage.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/v1/users";
      const { data: res } = await axios.post(url, data);
      console.log(data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={loginImage} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form action="submit">
            <h2 className="text-4xl font-bold text-center mb-8">Pheonix</h2>
            <div className="grid grid-cols-2 m-auto">
              <input
                required
                onChange={handleChange}
                name="firstName"
                value={data.firstName}
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="First Name"
              />
              <input
                required
                onChange={handleChange}
                name="lastName"
                value={data.lastname}
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="Last Name"
              />
              <input
                required
                onChange={handleChange}
                name="email"
                value={data.email}
                className="border p-2 mr-2 my-1"
                type="text"
                placeholder="Username"
              />
              <input
                required
                onChange={handleChange}
                name="password"
                value={data.password}
                className="border p-2 mr-2 my-1"
                type="password"
                placeholder="Password"
              />
            </div>
            {error && <div className="text-red-500">{error.message}</div>}
            <button onClick={handleSubmit} className="w-full py-2 my-4">
              Sign Up
            </button>

            <p className="text-center cursor-default hover:text-indigo-600">
              Already Have An Account?
            </p>
            <Link to="/login">
              <p className="text-center underline text-indigo-600 cursor-pointer">
                Login
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
