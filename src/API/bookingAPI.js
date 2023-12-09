import * as request from "../lib/request";

const bookingBaseUrl = "http://localhost:3000/api/booking";

// Book court //
export const bookCourt = async ({
  courtId,
  bookedBy,
  startTime,
  endTime,
  players,
}) => {
  try {
    const bookingData = await request.post(`${bookingBaseUrl}/book-court`, {
      courtId,
      bookedBy,
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
    console.log(allBookings);
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

// Edit booking //
export const editBooking = async ({
  _id: bookingId,
  courtId,
  startTime,
  endTime,
  players,
}) => {
  try {
    const bookingData = await request.put(
      `${bookingBaseUrl}/${bookingId}/edit`,
      { courtId, startTime, endTime, players }
    );

    return bookingData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete booking //
export const deleteBooking = async (bookingId) => {
  try {
    const booking = await request.remove(
      `${bookingBaseUrl}/${bookingId}/delete`
    );

    return booking;
  } catch (error) {
    throw new Error(error.message);
  }
};
