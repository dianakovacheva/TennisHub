import { useState, useEffect, useContext } from "react";

import { Divider } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

import ClubDetailsCard from "../club-details-card/ClubDetailsCard";
import CourtsList from "../courts-list/CourtsList";
import AddComment from "../add-comment/AddComment";
import CommentsList from "../comments-list/CommentsList";

import ClubDetailsCSS from "./ClubDetails.module.css";

import * as clubAPI from "../../API/clubAPI";
import * as commentAPI from "../../API/commentAPI";
import AuthContext from "../../contexts/AuthContext";

export default function ClubDetails() {
  const [club, setClub] = useState({});
  const [courts, setCourts] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);

  const navigate = useNavigate();
  const { clubId } = useParams();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    Promise.all([
      clubAPI
        .getClubComments(clubId)
        .then((result) => setComments(result))
        .catch((error) => {
          console.log(error);
        }),
      clubAPI
        .getClubById(clubId)
        .then((result) => setClub(result))
        .catch((error) => {
          console.log(error);
        }),
      clubAPI
        .getClubCourts(clubId)
        .then((result) => setCourts(result))
        .catch((error) => {
          console.log(error);
        }),
    ]);
  }, [toggleRefresh, refreshData, deleteComment]);

  const requestRefreshHandler = () => {
    setRefreshData((curr) => !curr);
  };

  // Add Comment
  const addComment = async (newComment) => {
    try {
      const response = await commentAPI.addComment(newComment, clubId);

      if (response) {
        console.log("Comment added successfully!");

        setToggleRefresh((curr) => !curr);
        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Comment
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

  const isClubOwner = userId === club.manager?.find(() => true)._id;
  const hasJoinedClub = club.members?.includes(userId);

  return (
    <div className={ClubDetailsCSS.detailsPageContainer}>
      <ClubDetailsCard
        isClubOwner={isClubOwner}
        hasJoinedClub={hasJoinedClub}
        requestRefreshHandler={requestRefreshHandler}
        club={club}
        courts={courts}
      />

      <CourtsList
        isClubOwner={isClubOwner}
        requestRefreshHandler={requestRefreshHandler}
        courts={courts}
      />

      <Divider className={ClubDetailsCSS.divider} variant="middle" />

      <CommentsList
        comments={comments}
        deleteCommentHandler={deleteCommentHandler}
      />

      {userId && <AddComment addComment={addComment} />}
    </div>
  );
}
