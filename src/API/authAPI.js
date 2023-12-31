import * as request from "../lib/request";
import baseApiUrl from "./baseApiUrl";

const userBaseUrl = `${baseApiUrl}/auth`;

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

// Login
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

// Logout
export const logout = () => {
  try {
    const response = request.post(`${userBaseUrl}/logout`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
