import * as request from "../lib/request";

const clubBaseURL = "http://localhost:3000/api/club";

export const getAllClubs = async () => {
  try {
    const response = await fetch(clubBaseURL);
    const result = await response.json();

    const clubData = Object.values(result);

    return clubData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get club courts //
export const getClubCourts = async () => {
  const clubId = "65535a13a601268c7bfbef73";
  try {
    const allCourtsData = await request.get(`${clubBaseURL}/${clubId}/courts`);

    return allCourtsData;
  } catch (error) {
    throw new Error(error.message);
  }
};
