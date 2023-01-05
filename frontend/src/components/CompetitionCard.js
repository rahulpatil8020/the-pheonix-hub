import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
const CompetitionCard = (props) => {
  return (
    <Link
      to={`/competitions/${props.competition?._id}`}
      state={{ competitionData: props.competition }}
    >
      <div className="bg-slate-100 h-60 mb-5 px-5 py-2 shadow-gray-400 shadow-md rounded-md">
        <h1 className="text-2xl text-indigo-600 overflow-ellipsis">
          {props.competition?.name}
        </h1>
        <p className="mt-2">
          Created on :{" "}
          {Moment(props.competition?.releaseDate).format("MM-DD-YYYY")}
        </p>

        <p className=" opacity-50 text-justify line-clamp-4">
          Description : {props.competition?.description}
        </p>
        <p className="mr-5 truncate text-green-700">
          Prize : {props.competition?.prize}
        </p>
        <p className="text-red-500">
          Due on : {Moment(props.competition?.finalDate).format("MM-DD-YYYY")}
        </p>
      </div>
    </Link>
  );
};

export default CompetitionCard;
