import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import AddComment from "../add-comment/AddComment";
import ClubDetailsCard from "../club-details-card/ClubDetailsCard";
import CommentsList from "../comments-list/CommentsList";

import { Divider, Fab } from "@mui/material";

import ClubDetailsCSS from "./ClubDetails.module.css";
import CourtsList from "../courts-list/CourtsList";
import * as clubAPI from "../../API/clubAPI";
import * as commentAPI from "../../API/commentAPI";

export default function ClubDetails() {
  const [comments, setComments] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);
  const { clubId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    clubAPI
      .getClubComments(clubId)
      .then((result) => setComments(result))
      .catch((error) => {
        console.log(error);
      });
  }, [toggleRefresh, deleteComment]);

  const addComment = async (newComment) => {
    // e.preventDefault();

    // const commentData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      // const response = await commentAPI.addComment(commentData, clubId);

      const response = await commentAPI.addComment(newComment, clubId);

      if (response) {
        // setComments([...comments, response]);

        console.log("Comment added successfully!");

        setToggleRefresh((curr) => !curr);
        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCommentHandler = async (commentId) => {
    try {
      const response = await commentAPI.deleteComment(commentId, clubId);

      if (response) {
        console.log("Comment deleted successfully!");

        setDeleteComment((curr) => !curr);

        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={ClubDetailsCSS.detailsPageContainer}>
      <ClubDetailsCard />

      {/* <CourtsList /> */}
      <Divider className={ClubDetailsCSS.divider} variant="middle" />
      <AddComment addComment={addComment} />
      <CommentsList
        comments={comments}
        deleteCommentHandler={deleteCommentHandler}
      />
    </div>
  );
}
