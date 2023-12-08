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

// Edit court
export const editCourt = async (court) => {
  const { courtId, clubId, courtName, surface, indoor, lighting } = court;
  try {
    const courtData = await request.put(
      `${courtBaseUrl}/${clubId}/court/${courtId}/edit`,
      { clubId, courtName, surface, indoor, lighting }
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
