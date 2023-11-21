const clubBaseURL = "http://localhost:3000/api/club/";

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
