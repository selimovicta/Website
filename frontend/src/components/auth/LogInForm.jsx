import React, { useReducer, useEffect } from "react";
import AuthFormHolder from "./AuthFormHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { validateEmail, validatePassword } from "./validateFunctions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, userSelector } from "../../features/auth/userSlice";

const initialState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  submitReady: false,
};

const loginReducer = (state, action) => {
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
      return state;
  }
};

const LogInForm = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const toggleSubmitBtn = () => {
    // checking if submit button should be enabled or not
    if (
      state.emailError === "" &&
      state.passwordError === "" &&
      state.password.length > 5 &&
      state.email.length > 2
    ) {
      dispatch({ type: "TOGGLE_SUBMIT_BTN_DISABLED", payload: true });
    } else {
      dispatch({ type: "TOGGLE_SUBMIT_BTN_DISABLED", payload: false });
    }
  };

  useEffect(() => {
    toggleSubmitBtn();
  }, [state.email, state.password]);

  const onChange = (e) => {
    // on change of any input field
    if (e.target.name === "email") {
      dispatch({
        type: "VALIDATE_EMAIL",
        payload: e.target.value,
      });
      dispatch({
        type: "EMAIL_CHANGE",
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

  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
    };
    Dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, isError]);

  return (
    <AuthFormHolder>
      <form id="login-form" onSubmit={onSubmit}>
        <div className="form-group">
          <h2 className="text-left">Sign In</h2>
          <span className="text-danger mt-1 d-block">{errorMessage}</span>
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
          <span className="floating-label">Enter your Email</span>
          <span className="text-danger mt-1 d-block">
            {state.emailError !== "" && (
              <FontAwesomeIcon icon={faExclamationTriangle} />
            )}{" "}
            {state.emailError}
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
          disabled={!state.submitReady}
          id="sign-in-button"
        >
          Sign In
        </button>

        <hr></hr>
        <span>
          Dont have an account?
          <Link to="/sign-up/">
            {" "}
            Sign up here <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </Link>
        </span>
      </form>
    </AuthFormHolder>
  );
};

export default LogInForm;
