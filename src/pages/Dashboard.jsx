import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Dashboard = ({ enrolledCourses }) => {
  const navigate = useNavigate();
  const [completedCourses, setCompletedCourses] = useState([]);
  const courseDetails = {
    course: "Sample Course",
    instructor: "John Doe",
    enrolled: true,
    completed: false,
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className=" shadow-lg rounded-lg p-8">
        <div className="flex container mx-auto justify-between">
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
          <div
            className="px-4 cursor-pointer mt-3 sm:mt-4 transition duration-300 ease-in-out hover:scale-110"
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.7em"
              viewBox="0 0 512 512"
              fill="#FFA101"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-semibold mt-4 mb-4 px-5 sm:px-4 container mx-auto">
          Courses Enrolled
        </h1>
        <div className="container mt-4 mx-auto flex justify-center flex-wrap gap-4 mb-4">
          <Card props={courseDetails} />
          <Card props={courseDetails} />
          <Card props={courseDetails} />
          <Card props={courseDetails} />
          <Card props={courseDetails} />
          <Card props={courseDetails} />
          <Card props={courseDetails} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
