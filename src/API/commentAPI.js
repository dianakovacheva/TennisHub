import * as request from "../lib/request";

import baseApiUrl from "./baseApiUrl";

const commentBaseURL = `${baseApiUrl}/comments`;

// Add comment
export const addComment = async (comment, clubId) => {
  try {
    const commentData = await request.post(
      `${commentBaseURL}/club/${clubId}/add-comment`,
      { comment }
    );

    return commentData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all comments
export const getAllComments = async () => {
  try {
    const allComments = await request.get(`${commentBaseURL}/`);

    return allComments;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Edit comment
export const editComment = async (commentId) => {
  try {
    const comment = await request.put(`${commentBaseURL}/${commentId}/edit`);

    return comment;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete comment
export const deleteComment = async (commentId, clubId) => {
  try {
    const comment = await request.remove(
      `${commentBaseURL}/club/${clubId}/comment/${commentId}/delete`
    );

    return comment;
  } catch (error) {
    throw new Error(error.message);
  }
};

// User comments
export const getUserComments = async (userId) => {
  try {
    const userComments = await request.get(`${commentBaseURL}/user/${userId}`);

    return userComments;
  } catch (error) {
    throw new Error(error.message);
  }
};
