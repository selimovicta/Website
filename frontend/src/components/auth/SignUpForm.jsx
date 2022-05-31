import React, { useReducer, useEffect } from "react";
import AuthFormHolder from "./AuthFormHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "./validateFunctions";
import { useSelector, useDispatch } from "react-redux";
import {
  signupUser,
  userSelector,
  clearState,
} from "../../features/auth/userSlice";

import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  submitReady: false,
  name: "",
  nameError: "",
};

const signUpReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SUBMIT_BTN_DISABLED":
      return {
        ...state,
        submitReady: action.payload,
      };
    case "EMAIL_CHANGE":
      return {
        ...state,
        email: action.payload,
      };

    case "VALIDATE_EMAIL":
      return {
        ...state,
        emailError: validateEmail(action.payload),
      };

    case "NAME_CHANGE":
      return {
        ...state,
        name: action.payload,
      };

    case "VALIDATE_NAME":
      return {
        ...state,
        nameError: validateName(action.payload),
      };
    case "PASSWORD_CHANGE":
      return {
        ...state,
        password: action.payload,
      };
    case "VALIDATE_PASSWORD":
      return {
        ...state,
        passwordError: validatePassword(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

const SignUpForm = () => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, errors } = useSelector(userSelector);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
      name: state.name,
    };
    Dispatch(signupUser(data));
  };

  const toggleSubmitBtn = () => {
    // checking if submit button should be enabled or not
    if (
      state.emailError === "" &&
      state.passwordError === "" &&
      state.nameError === "" &&
      state.password.length > 5 &&
      state.email.length > 2
    ) {
      dispatch({ type: "TOGGLE_SUBMIT_BTN_DISABLED", payload: true });
    } else {
      dispatch({ type: "TOGGLE_SUBMIT_BTN_DISABLED", payload: false });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    toggleSubmitBtn();
  }, [state.email, state.password, state.name]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, isError]);

  const onChange = (e) => {
    if (e.target.name === "email") {
      dispatch({
        type: "VALIDATE_EMAIL",
        payload: e.target.value,
      });
      dispatch({
        type: "EMAIL_CHANGE",
        payload: e.target.value,
      });
    } else if (e.target.name === "name") {
      dispatch({
        type: "VALIDATE_NAME",
        payload: e.target.value,
      });
      dispatch({
        type: "NAME_CHANGE",
        payload: e.target.value,
      });
    } else {
      dispatch({
        type: "VALIDATE_PASSWORD",
        payload: e.target.value,
      });
      dispatch({
        type: "PASSWORD_CHANGE",
        payload: e.target.value,
      });
    }
  };
  return (
    <AuthFormHolder>
      <form id="sign-up-form" onSubmit={onSubmit}>
        <div className="form-group">
          <h2 className="text-left">Create Account</h2>
        </div>
        <div className="form-group">
          <input
            type="text"
            className={`form-control inputText 
            ${
              state.email.length > 1 && state.emailError !== ""
                ? "inputText-border-danger"
                : ""
            }
            ${
              state.email.length > 1 && state.emailError === ""
                ? "inputText-border-success"
                : ""
            }
            `}
            name="email"
            value={state.email}
            onChange={onChange}
            required
          />
          <span className="floating-label">Email</span>
          <span className="text-danger mt-1 d-block">
            {state.emailError !== "" && (
              <FontAwesomeIcon icon={faExclamationTriangle} />
            )}{" "}
            {state.emailError}
            {errors.email}
          </span>
        </div>

        <div className="form-group">
          <input
            className={`form-control inputText 
          ${
            state.name.length > 1 && state.nameError !== ""
              ? "inputText-border-danger"
              : ""
          }
          ${
            state.name.length > 1 && state.nameError === ""
              ? "inputText-border-success"
              : ""
          }
          `}
            type="text"
            name="name"
            onChange={onChange}
            required
          />
          <span className="floating-label">Name</span>
          <span className="text-danger mt-1 d-block">
            {state.nameError !== "" && (
              <FontAwesomeIcon icon={faExclamationTriangle} />
            )}{" "}
            {state.nameError}
          </span>
        </div>

        <div className="form-group">
          <input
            className={`form-control inputText 
          ${
            state.password.length > 1 && state.passwordError !== ""
              ? "inputText-border-danger"
              : ""
          }
          ${
            state.password.length > 1 && state.passwordError === ""
              ? "inputText-border-success"
              : ""
          }
          `}
            type="password"
            name="password"
            onChange={onChange}
            required
          />
          <span className="floating-label">Password</span>
          <span className="text-danger mt-1 d-block">
            {state.passwordError !== "" && (
              <FontAwesomeIcon icon={faExclamationTriangle} />
            )}{" "}
            {state.passwordError}
          </span>
        </div>
        <button
          className="auth-btn btn"
          id="sign-up-button"
          disabled={!state.submitReady}
        >
          Sign Up
        </button>

        <hr></hr>
        <span>
          Already have an account?{" "}
          <Link to="/log-in/">
            Sign in here <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </Link>
        </span>
      </form>
    </AuthFormHolder>
  );
};

export default SignUpForm;
