import * as request from "../lib/request";

import baseApiUrl from "./baseApiUrl";

const userBaseUrl = `${baseApiUrl}/user`;

// Get User by Id
export const getUserById = async (userId) => {
  try {
    const userData = await request.get(`${userBaseUrl}/${userId}`);

    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// User Joined Clubs
export const getUserJoinedClubs = async (userId) => {
  try {
    const userJoinedClubs = await request.get(
      `${userBaseUrl}/${userId}/joined-clubs`
    );

    return userJoinedClubs;
  } catch (error) {
    throw new Error(error.message);
  }
};
