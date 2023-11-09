const baseURL = "http://localhost:3030/jsonstore/users";

export const getAllTennisClubs = async () => {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();

    const tennisClubsData = Object.values(result);

    return tennisClubsData;
  } catch (error) {
    throw new Error(error.message);
  }
};
