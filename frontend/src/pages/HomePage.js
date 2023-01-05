import React, { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";
import axios from "axios";
import CompetitionCard from "../components/CompetitionCard";
const HomePage = () => {
  const [competitions, setCompetitions] = useState([]);
  const getAllCompetitions = async () => {
    try {
      const url = "http://localhost:8000/api/v1/competitions";
      await axios.get(url, {}).then((res) => {
        if (res) setCompetitions(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCompetitions();
  }, []);
  return (
    <>
      <div className="flex items-center justify-start mt-5 ml-5">
        <HiCode className="mx-3 text-3xl text-indigo-600" />
        <h1 className="text-3xl">Competitions for you</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 px-3 py-3">
        {competitions.map((competition) => (
          <CompetitionCard competition={competition} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
