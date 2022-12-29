import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
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
      <div className="px-5 py-4 h-screen w-6/12 m-auto shadow-xl flex flex-col">
        <h1 className="text-4xl text font-bold">{competitionData?.name}</h1>
        <p className="text-lg pt-3 text-justify">
          {competitionData?.description}
        </p>
        <p className="text-indigo-500 pt-2">
          Created on :{" "}
          {Moment(props.competitionData?.releaseDate).format("MM-DD-YYYY")}
        </p>
        <p className="text-red-500 pt-2">
          Due on : {Moment(props.competitionData?.dueDate).format("MM-DD-YYYY")}
        </p>
        <p className="text-green-500 text-xl pt-2">
          Prize : {competitionData.prize}
        </p>
        <h4 className="text-2xl font-bold">Questions</h4>
        {questions.map((que) => {
          return (
            <div className="h-10 bg-zinc-100 flex items-center justify-center mt-3 rounded-sm shadow-sm">
              {que?.name}
            </div>
          );
        })}
        <button
          className="mt-5 py-2 w-24 self-center"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Compete
        </button>
      </div>
    </div>
  );
};

export default CompetitionPage;
