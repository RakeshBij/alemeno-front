import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { login } from "../requests/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (payload) => {
      const { message, err } = await login(payload);
      if (message) {
        toast.success(message);
        navigate(`/`);
      } else if (err) {
        toast.error(err);
      }
    },
  });
  return (
    <>
      <div className="flex h-[100%] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            <span className="text-myYellow">Login</span> in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  {...formik.getFieldProps("email")}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...formik.getFieldProps("password")}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-myYellow w-full py-2 hover:bg-[#e69101] p-1 lg:px-4 rounded-lg cursor-pointer text-sm px-2 font-bold"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="flex justify-end gap-[4px] mt-2">
            Do not have a account?{" "}
            <Link className="text-myYellow cursor-pointer" to={"/signup"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
