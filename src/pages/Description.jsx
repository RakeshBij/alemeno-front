import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { courses } from "../requests/request";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { enrollIntoCourse } from "../requests/request";

const Description = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const courseId = id.substring(1);
  const payload = { limit: 100, page: 1, search: "" };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(() => {
    // Fetch the list of courses when the component mounts
    const fetchData = async () => {
      const { message, err } = await courses(payload);
      if (message) {
        setCourseData(message.courses); // Update the course data state with the fetched courses
        setLoading(false);
      } else if (err) {
        console.error(err); // Handle any errors
      }
    };

    fetchData();
  }, []);

  const filteredCourse = courseData.filter((course) => course._id === courseId);
  console.log(filteredCourse[0]);

  const enroll = async (payload) => {
    const { message, err } = await enrollIntoCourse(payload);
    if (message) {
      setCourseData(message); // Update the course data state with the fetched courses
    } else if (err) {
      console.error(err); // Handle any errors
    }
  };

  const enrollForTheCourse = () => {
    if (
      filteredCourse[0].enrollmentStatus === "open" ||
      filteredCourse[0].enrollmentStatus === "progress"
    ) {
      console.log(courseId);
      enroll(courseId);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : filteredCourse[0] ? (
        <>
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
                src={filteredCourse[0].thumbnail}
                alt="Course Cover"
                className="w-full h-[200px] md:w-[600px] md:h-[250px] rounded-lg"
              />
            </div>
            <div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold  mb-2">
                  {filteredCourse[0].name}
                </h1>
                <p className="text-lg text-[#cccccc]">
                  {filteredCourse[0].instructor}
                </p>
              </div>
              <p className=" text-lg mb-4 text-[#cccccc]">
                <span className="font-bold mr-1 text-white">
                  Description :{" "}
                </span>
                {filteredCourse[0].description}
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold">
                  Enrollment Status :
                  <span
                    className={`inline-block font-bold ml-1 ${
                      filteredCourse[0].enrollmentStatus === "open"
                        ? "text-[#34C724]"
                        : filteredCourse[0].enrollmentStatus === "closed"
                        ? "text-[#F54A54]"
                        : "text-[#FFB800]"
                    }`}
                  >
                    {capitalizeFirstLetter(filteredCourse[0].enrollmentStatus)}
                  </span>
                </div>
              </div>
              <p className=" text-lg mb-4 text-[#cccccc]">
                <span className="font-bold mr-1 text-white">
                  Course Duration :{" "}
                </span>{" "}
                {filteredCourse[0].duration}
              </p>
              <p className=" text-lg mb-4 text-[#cccccc]">
                <span className="font-bold mr-1 text-white">Schedule : </span>{" "}
                {filteredCourse[0].schedule}
              </p>
              <p className=" text-lg mb-4 text-[#cccccc]">
                <span className="font-bold mr-1 text-white">Location : </span>{" "}
                {filteredCourse[0].location}
              </p>
              <p className=" text-lg mb-4 text-[#cccccc]">
                <span className="font-bold mr-1 text-white">
                  Pre-requisites :{" "}
                </span>{" "}
                {filteredCourse[0].prerequisites.join(", ")}
              </p>
              <p className="mb-4 text-lg text-[#cccccc]">
                <span className="font-bold mr-1 text-white">Syllabus : </span>
                <ul>
                  {filteredCourse[0].syllabus.map((item) => (
                    <li key={item._id}>
                      <br />
                      <strong>Week {item.week}:</strong> {item.topic}
                      <br />
                      {item.content}
                    </li>
                  ))}
                </ul>
              </p>
              <button
                className="bg-myYellow mb-4 hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-l px-2 font-bold"
                onClick={enrollForTheCourse}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Description;
