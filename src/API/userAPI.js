import * as request from "../lib/request";

const userBaseUrl = "http://localhost:3000/api/auth";

// Register
export const register = (firstName, lastName, email, password) => {
  try {
    const response = request.post(`${userBaseUrl}/register`, {
      firstName,
      lastName,
      email,
      password,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Log in
export const login = async (email, password) => {
  try {
    const response = await request.post(`${userBaseUrl}/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Log out
export const logout = () => {
  try {
    const response = request.post(`${userBaseUrl}/logout`);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
