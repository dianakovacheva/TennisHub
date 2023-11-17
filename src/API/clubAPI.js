const baseURL = "http://localhost:3000/api/clubs/";

export const getAllClubs = async () => {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();

    const clubData = Object.values(result);

    return clubData;
  } catch (error) {
    throw new Error(error.message);
  }
};
