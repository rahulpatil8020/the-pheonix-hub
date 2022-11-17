import React, { useState, useEffect } from "react";
import axios from "axios";

const CompetitionPage = () => {
  const [questions, setQuestions] = useState([]);
  const getAllQuestions = async () => {
    try {
      const url = `http://localhost:8000/api/v1${window.location.pathname}/questions`;
      await axios.get(url, {}).then((res) => {
        console.log(res, "###");
        if (res) setQuestions(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuestions();
  }, []);
  console.log(questions, "....");
  return <div>{questions[0]?.name}</div>;
};

export default CompetitionPage;
