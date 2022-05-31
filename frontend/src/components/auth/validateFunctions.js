export const validateEmail = (value) => {
  if (value.length > 0) {
    // if user wants to log in with email
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (emailRegex.test(value)) {
      return "";
    } else {
      return "Please enter a valid Email";
    }
  }
};


export const validatePassword = (password) => {
  if (password.length < 6) {
    return "Password must be atleast 6 characters long.";
  } else if (password.length > 255) {
    return "Password is too long max of 255 characters is allowed.";
  } else {
    return "";
  }
};

export const validateName = (value) => {
  if (value.length > 0) {
    // validate name
    const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (nameRegex.test(value)) {
      return "";
    } else {
      return "Please enter a valid Name";
    }
  }
};
