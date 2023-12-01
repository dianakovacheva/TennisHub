import * as request from "../lib/request";

const userBaseUrl = "http://localhost:3000/api/user";

// Get User by Id
export const getUserById = async (userId) => {
  try {
    const userData = await request.get(`${userBaseUrl}/${userId}`);

    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};
