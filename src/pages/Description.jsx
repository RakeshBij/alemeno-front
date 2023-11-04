import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex container mx-auto">
        <div
          className="px-4 cursor-pointer mt-3 sm:mt-4 transition duration-300 ease-in-out hover:scale-110"
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.7em"
            viewBox="0 0 448 512"
            fill="#31525B"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg p-8 mt-3 sm:mt-4 mx-auto container px-4 md:gap-4">
        <div className="mb-4 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oiesyKVGKXyQ_MNyxAk4i7nEgi8QYZffHw&usqp=CAU"
            alt="Course Cover"
            className="w-full h-[200px] md:w-[600px] md:h-[250px] rounded-lg"
          />
        </div>
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold  mb-2">Course Name</h1>
            <p className="text-lg text-[#cccccc]">Instructor's Name</p>
          </div>
          <p className=" text-lg mb-4 text-[#cccccc]">
            <span className="font-bold mr-1 text-white">Description : </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            ligula at odio venenatis posuere.
          </p>
          <div className="mb-4">
            <div className="text-lg font-bold">
              Enrollment Status :
              <span className="inline-block text-[#34C724] rounded-lg font-bold ml-1">
                Open
              </span>
              <span className="inline-block text-[#F54A54] rounded-lg font-bold ml-1">
                Closed
              </span>
              <span className="inline-block text-[#FFB800] rounded-lg font-bold ml-1">
                In Progress
              </span>
            </div>
          </div>
          <p className=" text-lg mb-4 text-[#cccccc]">
            <span className="font-bold mr-1 text-white">
              Course Duration :{" "}
            </span>{" "}
            8 weeks
          </p>
          <p className=" text-lg mb-4 text-[#cccccc]">
            <span className="font-bold mr-1 text-white">Schedule : </span> Mon &
            Wed, 10:00 AM - 12:00 PM
          </p>
          <p className=" text-lg mb-4 text-[#cccccc]">
            <span className="font-bold mr-1 text-white">Location : </span>{" "}
            Online
          </p>
          <p className=" text-lg mb-4 text-[#cccccc]">
            <span className="font-bold mr-1 text-white">Pre-requisites : </span>{" "}
            None
          </p>
          <p className="mb-4 text-lg text-[#cccccc]">
            <span className="font-bold mr-1 text-white">Syllabus : </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            ligula at odio venenatis posuere. Nunc scelerisque odio vel massa
            egestas, non egestas dolor fermentum.
          </p>
          <button className="bg-myYellow mb-4 hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-l px-2 font-bold">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
