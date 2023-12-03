import * as request from "../lib/request";

const clubBaseURL = "http://localhost:3000/api/club";

// Create club
export const createClub = async ({
  name,
  imageURL,
  summary,
  address,
  phoneNumber,
}) => {
  try {
    const clubData = await request.post(`${clubBaseURL}/create`, {
      name,
      imageURL,
      summary,
      address,
      phoneNumber,
    });

    return clubData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all clubs
export const getAllClubs = async () => {
  try {
    const allClubs = await request.get(clubBaseURL);

    return allClubs;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get club by id
export const getClubById = async (clubId) => {
  try {
    const clubData = await request.get(`${clubBaseURL}/${clubId}`);

    return clubData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Edit club
export const editClub = async (
  { name, imageURL, summary, address, phoneNumber },
  clubId
) => {
  try {
    const clubData = await request.put(`${clubBaseURL}/${clubId}/edit`, {
      name,
      imageURL,
      summary,
      address,
      phoneNumber,
    });

    return clubData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete club
export const deleteClub = async (clubId) => {
  try {
    const club = await request.remove(`${clubBaseURL}/${clubId}/delete`);

    return club;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Join club
export const joinClub = async (clubId) => {
  try {
    const club = await request.put(`${clubBaseURL}/${clubId}/join`);

    return club;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Leave club
export const leaveClub = async (clubId) => {
  try {
    const club = await request.remove(`${clubBaseURL}/${clubId}/leave`);

    return club;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get club members
export const getClubMembers = async (clubId) => {
  try {
    const clubMembers = await request.get(`${clubBaseURL}/${clubId}/members`);

    return clubMembers;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get club courts
export const getClubCourts = async (clubId) => {
  try {
    const clubCourtsData = await request.get(`${clubBaseURL}/${clubId}/courts`);

    return clubCourtsData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get court by id
export const getCourtById = async (clubId, courtId) => {
  try {
    const courtData = await request.get(
      `${clubBaseURL}/${clubId}/court/${courtId}`
    );

    return courtData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get club comments
export const getClubComments = async (clubId) => {
  try {
    const clubComments = await request.get(
      `http://localhost:3000/api/comments/club/${clubId}`
    );

    return clubComments;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Search
export const search = async (searchQuery) => {
  try {
    const searchResult = await request.get(
      `${clubBaseURL}/search/${searchQuery}` // TODO: Update this function
    );

    return searchResult;
  } catch (error) {
    throw new Error(error.message);
  }
};
