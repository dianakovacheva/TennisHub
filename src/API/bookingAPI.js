import * as request from "../lib/request";

const bookingBaseUrl = "http://localhost:3000/api/booking";

export const bookCourt = async (courtId, startTime, endTime, players) => {
  try {
    const response = await request.post(`${bookingBaseUrl}/book-court`, {
      courtId,
      startTime,
      endTime,
      players,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllBookings = async () => {
  try {
    const response = await fetch(bookingBaseUrl);
    const result = await response.json();
    const allBookingsData = Object.values(result);

    return allBookingsData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBookingById = async (bookingId) => {
  try {
    const response = await fetch(`${bookingBaseUrl}/${bookingId}`);
    const result = await response.json();
    const bookingData = Object.values(result);

    return bookingData;
  } catch (error) {
    throw new Error(error.message);
  }
};
