import * as request from "../lib/request";

const courtBaseUrl = "http://localhost:3000/api/club";

// Create court
export const createCourt = async ({
  clubId,
  courtName,
  surface,
  indoor,
  lighting,
}) => {
  try {
    const courtData = await request.post(`${courtBaseUrl}/court/create`, {
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
      `${courtBaseUrl}/court/${courtId}/edit`,
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
export const deleteCourt = async (courtId, clubId) => {
  try {
    const court = await request.remove(
      `${courtBaseUrl}/${clubId}/court/${courtId}/delete`
    );

    if (court) {
      console.log("Court deleted successfully!");
    }

    return court;
  } catch (error) {
    throw new Error(error.message);
  }
};
