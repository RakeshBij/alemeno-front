import toast from "react-hot-toast";
import { authenticate } from "./helper";

// validate username

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  console.log(error);
  return error;
}

// validate email

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}

// validate password

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error("Please enter password...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong password...!");
  } else if (values.password.length < 4) {
    error.password = toast.error(
      "Too short, Paswword must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password mus thave special characters");
  }

  return error;
}

// --------------------------------------------------------------------------------------------

export async function loginValidate(payload) {
  const errors = usernameVerify({}, payload);

  if (payload.username) {
    // check user exist or not
    const { status } = await authenticate(payload.username);

    if (status !== 200) {
      errors.exist = toast.error("User does not exist...!");
    }
  }

  passwordVerify(errors, values);
  return errors;
}

export async function signupValidate(payload) {
  // const errors = usernameVerify({}, payload);
  // passwordVerify(errors, payload);
  // emailVerify(errors, payload);
  // console.log("heer");
  // console.log(errors);
  // console.log(payload);
  return errors;
}
