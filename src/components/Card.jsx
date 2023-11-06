import React from "react";
import { useNavigate } from "react-router-dom";
import { markComplete } from "../requests/request";

const Card = ({ props, enrollementId, getAllCourses }) => {
  const navigate = useNavigate();
  const { _id } = props;

  const markAsComplete = async () => {
    const payload = {
      enrollmentId: enrollementId,
      status: "completed",
    };
    const { data, message, err } = await markComplete(payload);
    getAllCourses();
    console.error(err);
  };

  return (
    <>
      <div className="bg-lightGrey rounded-lg mx-2 flex flex-col w-[300px] gap-2 cursor-pointer mb-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <div
          onClick={() => {
            navigate(`/description/:${_id}`);
          }}
        >
          <img src={props.thumbnail} alt="" className="rounded-lg w-auto" />
          {enrollementId ? (
            <div className="w-32 bg-blue-200 h-1 rounded-full ">
              <div
                className={`h-1 rounded-full bg-myYellow`}
                style={{
                  width: `${props.completed ? "100%" : "20%"}`,
                }}
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="pl-2 pb-1"
          onClick={() => {
            navigate(`/description/:${_id}`);
          }}
        >
          <div className="text-2xl font-bold">{props.name}</div>
          <div className="text-[#cccccc] text-sm ">{props.instructor}</div>
        </div>
        {!enrollementId ? (
          <button
            className="border-2 transition duration-300 ease-in-out border-myYellow hover:border-[#e69101] hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-sm px-2 font-bold"
            onClick={() => {
              navigate(`/description/:${_id}`);
            }}
          >
            View Details
          </button>
        ) : (
          <>
            <div className="mt-1 font-semibold pl-2">
              Due Date : <span className="text-[#ccc] font-normal">21 Ot</span>
            </div>
            {props.enrollmentStatus !== "completed" ? (
              <button
                className="border-2 pl-2 mt-2 transition duration-300 ease-in-out border-myYellow hover:border-[#e69101] hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-sm px-2 font-bold"
                onClick={markAsComplete}
              >
                Mark Complete
              </button>
            ) : (
              <div className="mt-1 pl-2 mb-4 font-semibold uppercase text-myYellow ">
                Course Compelted
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Card;
