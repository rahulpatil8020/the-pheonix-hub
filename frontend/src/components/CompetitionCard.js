import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
const CompetitionCard = (props) => {
  return (
    <Link
      to={`/competitions/${props.competition?._id}`}
      state={{ competitionData: props.competition }}
    >
      <div className="bg-slate-100 mx-10 mt-10 mb-5 px-5 py-2 shadow-gray-400 shadow-md rounded-md">
        <div className="w-full flex items-center justify-between">
          <a className="text-2xl text-indigo-600 truncate">
            {props.competition?.name}
          </a>
          <p className="text-indigo-500 pl-4">
            Created on :{" "}
            {Moment(props.competition?.releaseDate).format("MM-DD-YYYY")}
          </p>
        </div>
        <p className="pr-5 text-justify truncate">
          Description : {props.competition?.description}
        </p>
        <p className="mr-5 text-justify truncate inline text-green-700">
          Prize : {props.competition?.prize}
        </p>
        <p className="text-red-500 inline ml-5">
          Due on : {Moment(props.competition?.finalDate).format("MM-DD-YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default CompetitionCard;
