import React, { useState, useEffect, useContext } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "../models/user-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [nav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMob = width <= 992;
  const userToken = localStorage.getItem("token");
  const handleClick = () => setNav(!nav);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const getUser = async () => {
    try {
      const url = "http://localhost:8000/api/v1/users";
      await axios
        .get(url, {
          params: {
            userToken: userToken,
          },
        })
        .then((res) => {
          if (res) setUser(res.data);
          console.log(user, "...");
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Pheonix</h1>
          <ul className="hidden md:flex items-center">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link>
              <li>Support</li>
            </Link>
            {user && <li>Hey {user?.firstName}</li>}
          </ul>
        </div>
        {userToken ? (
          <div className="hidden md:flex pr-4">
            <button
              className="px-8 py-3"
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex pr-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!userToken) navigate("/login");
                else navigate("/home");
              }}
              className="border-none bg-transparent text-black mr-4"
            >
              Login
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                if (!userToken) navigate("/signup");
                else navigate("/home");
              }}
              className="px-8 py-3"
            >
              Sign Up
            </button>
          </div>
        )}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <HiOutlineMenu /> : <HiX />}
        </div>
      </div>
      <ul
        className={
          !nav || !isMob ? "hidden" : "absolute bg-zinc-200 w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        {userToken ? (
          <div className="flex flex-col my-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="px-8 py-3"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col my-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              className="bg-transparent text-black px-8 py-3 mb-4"
            >
              Login
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
              className="px-8 py-3"
            >
              Sign Up
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
