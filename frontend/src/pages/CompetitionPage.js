import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CompetitionPage = (props) => {
  const location = useLocation();
  const competitionData = location.state.competitionData;
  const [questions, setQuestions] = useState([]);
  const getAllQuestions = async () => {
    try {
      const url = `http://localhost:8000/api/v1${window.location.pathname}/questions`;
      await axios
        .get(url, {
          params: {
            competitionId: window.location.pathname.substring(14),
          },
        })
        .then((res) => {
          if (res) setQuestions(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllQuestions();
  }, []);
  return (
    <div>
      <div className="h-screen w-6/12 m-auto shadow-xl flex flex-col">
        <h1 className="text-4xl px-5 py-4 text font-bold">
          {competitionData?.name}
        </h1>
        <p className="text-lg px-5 text-justify">
          {competitionData?.description}
        </p>
      </div>
    </div>
  );
};

export default CompetitionPage;
