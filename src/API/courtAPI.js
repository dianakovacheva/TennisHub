import * as request from "../lib/request";

const courtBaseUrl = "http://localhost:3000/api/club/court";

// Create court
export const createCourt = async ({
  clubId,
  courtName,
  surface,
  indoor,
  lighting,
}) => {
  try {
    const courtData = await request.post(`${courtBaseUrl}/create`, {
      clubId,
      courtName,
      surface,
      indoor,
      lighting,
    });

    return courtData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get court by id
// export const getCourtById = async (courtId) => {
//   try {
//     const courtData = await request.get(`${courtBaseUrl}/${courtId}`);

//     return courtData;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// Edit court
export const editCourt = async (
  clubId,
  courtName,
  surface,
  indoor,
  lighting
) => {
  try {
    const courtData = await request.put(
      `${courtBaseUrl}/${courtId}/edit`,
      clubId,
      courtName,
      surface,
      indoor,
      lighting
    );

    return courtData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete court
export const deleteCourt = async (courtId) => {
  try {
    const court = await request.delete(`${courtBaseUrl}/${courtId}/delete`);

    return court;
  } catch (error) {
    throw new Error(error.message);
  }
};
