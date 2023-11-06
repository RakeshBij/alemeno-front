import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = "https://alamino-back.onrender.com/api";

export const signup = async function (payload) {
  let message = "";
  let err = "";
  try {
    const response = await axios.post(`${apiUrl}/auth/signup`, payload);
    const data = response.data;
    const token = data.token;
    const user = data.user;
    localStorage.setItem("user", JSON.stringify(user));
    Cookies.set("token", token);
    message = "Signed up";
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err };
};

export const login = async function (payload) {
  let message = "";
  let err = "";
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, payload);

    const data = response.data;
    const token = data.token;
    const user = data.user;
    localStorage.setItem("user", JSON.stringify(user));
    Cookies.set("token", token);
    message = "Logged In";
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err };
};

export const courses = async function (payload) {
  let message = "";
  let err = "";
  try {
    const response = await axios.post(`${apiUrl}/courses`, payload);
    const data = response.data;
    message = data;
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err };
};

export async function enrollIntoCourse(payload) {
  let message = "";
  let err = "";
  try {
    const token = Cookies.get("token");
    const response = await axios.post(`${apiUrl}/enroll`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    message = "You are enrolled";
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err };
}

export async function getMyCourse() {
  let message = "";
  let err = "";
  let data = {};
  try {
    const token = Cookies.get("token");
    const response = await axios.get(`${apiUrl}/enroll/mine`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    data = response.data;
    message = "Enrolled courses";
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err, data };
}

export async function markComplete(payload) {
  let message = "";
  let err = "";
  let data = {};
  try {
    const token = Cookies.get("token");
    const response = await axios.patch(
      `${apiUrl}/courses/update-status`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data = response.data;
    message = "Updated";
  } catch (error) {
    err = error.response.data.message;
  }
  return { message, err, data };
}
