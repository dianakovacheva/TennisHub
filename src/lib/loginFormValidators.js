const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

export const emailValidator = (email) => {
  if (!email) {
    return "You must enter a value";
  } else if (!emailRegExp.test(email)) {
    return "Incorrect email format";
  }
  return "";
};

export const passwordValidator = (password) => {
  if (!password) {
    return "You must enter a value";
  } else if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  return "";
};
