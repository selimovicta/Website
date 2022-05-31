import React from "react";
import "./auth.css";
const AuthFormHolder = (props) => {
  return <div className="auth-form-holder flex-column">{props.children}</div>;
};

export default AuthFormHolder;
