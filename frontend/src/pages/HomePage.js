import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../models/user-context";
const HomePage = () => {
  const userToken = localStorage.getItem("token");
  useEffect(() => {
    getUser();
  }, []);
  const [user, setUser] = useContext(UserContext);
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
          setUser(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return <div>HomePage</div>;
};

export default HomePage;
