import React, { useContext, useState } from "react";
import loginImage from "../assets/loginimage.jpeg";
import { UserContext } from "../models/user-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/v1/auth";
      const { data: res } = await axios.post(url, data);
      setUser(data);
      localStorage.setItem("token", res.data);
      navigate("/code");
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
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={loginImage} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form action="">
            <h2 className="text-4xl font-bold text-center mb-8">Pheonix</h2>
            <div>
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
                className="border p-2 "
                type="password"
                placeholder="Password"
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button onClick={handleSubmit} className="w-full py-2 my-4">
              Sign In
            </button>
            <p className="text-center cursor-default hover:text-indigo-600">
              Forgot Username or Password?
            </p>
            <Link to="/signup">
              <p className="my-2 text-center underline text-indigo-600 cursor-pointer">
                Sign Up
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
