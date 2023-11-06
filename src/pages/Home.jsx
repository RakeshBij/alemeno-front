import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { courses } from "../requests/request";

const Home = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const payload = { limit: 10, page: 1, search: "" };

  useEffect(() => {
    const fetchData = async () => {
      const { message, err } = await courses({ ...payload, page: currentPage });
      if (message) {
        setCourseData(message.courses);
        setLoading(false);
      } else if (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [currentPage]);
  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Navbar />
      {/* Search bar */}
      <form className="flex justify-end mt-3">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <input
          type="search"
          id="default-search"
          className="block p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Courses"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="text-white ml-1 lg:mr-3 mr-2 bg-myTealGreen hover:bg-[#274249] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-4 px-2 lg:py-2 cursor-pointer"
        >
          Search
        </button>
      </form>
      {/* Navigation Btns */}
      <div className="flex container mx-auto justify-between pb-4 mt-4">
        <div
          className="px-4 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
          onClick={() => handlePagination(currentPage - 1)}
        >
          {currentPage > 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.7em"
              viewBox="0 0 448 512"
              fill="#31525B"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          )}
        </div>
        <div
          className="px-4 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
          onClick={() => handlePagination(currentPage + 1)}
        >
          {currentPage < 10 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.7em"
              viewBox="0 0 448 512"
              fill="#31525B"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          )}
        </div>
      </div>
      {/* List of courses */}
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : (
        <div className="container mt-4 mx-auto flex justify-center flex-wrap gap-4 mb-4">
          {courseData
            .filter((val) => {
              return (
                val.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                val.location
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                val.enrollmentStatus
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                val.description
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                val.instructor
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              );
            })
            .map((course, index) => (
              <Card key={index} props={course} />
            ))}
        </div>
      )}
    </>
  );
};

export default Home;
