import * as request from "../lib/request";

const bookingBaseUrl = "http://localhost:3000/api/booking";

// Book court //
export const bookCourt = async (courtId, startTime, endTime, players) => {
  try {
    const bookingData = await request.post(`${bookingBaseUrl}/book-court`, {
      courtId,
      startTime,
      endTime,
      players,
    });

    return bookingData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all bookings //
export const getAllBookings = async () => {
  try {
    const allBookings = await request.get(bookingBaseUrl);

    return allBookings;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get booking by id //
export const getBookingById = async (bookingId) => {
  try {
    const bookingData = await request.get(`${bookingBaseUrl}/${bookingId}`);

    return bookingData;
  } catch (error) {
    throw new Error(error.message);
  }
};
