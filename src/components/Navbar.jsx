import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <>
      <nav className="container bg-lightGrey mx-auto lg:p-3  p-1 ">
        <div className="flex justify-between content-center items-center">
          <div
            className="text-myYellow lg:text-xl uppercase font-bold text-lg cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Rakesh's Acadmey
          </div>
          <div>
            {!token ? (
              <div className="flex lg:gap-4 gap-1">
                <button
                  className="border-2 transition duration-300 ease-in-out border-myYellow hover:border-[#e69101] hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-sm px-2 font-bold"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-myYellow hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-sm px-2 font-bold"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div
                className="border-4 transition duration-300 ease-in-out border-myYellow hover:bg-[#e69101] p-1 px-3 cursor-pointer rounded-2xl font-bold"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                {capitalizeFirstLetter(
                  JSON.parse(localStorage.getItem("user")).username
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
