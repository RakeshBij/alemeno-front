import React from "react";
import { useNavigate } from "react-router-dom";
// import { pageNotFound } from "../assets/pageNotFound.jpeg";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <img
        src="../assets/pageNotFound.jpeg"
        alt=""
        className="rounded-lg w-auto h-[200px]"
      /> */}
      <div className="grid h-[95%] place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-myYellow">
            Page not found
          </h1>

          <p className="mt-6 text-base leading-7 mb-4">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="bg-myYellow w-full py-2 hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-m px-2 font-bold"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
