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
  return <div>{competitionData?.name}</div>;
};

export default CompetitionPage;
