import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import { getClubComments } from "../../API/clubAPI";
import CommentItemCard from "./comment-item-card/CommentItemCard";
import CommentsListCSS from "./CommentsList.module.css";
import NoComments from "../no-comments/NoComments";

export default function CommentsList() {
  const [comments, setComments] = useState([]);
  const { clubId } = useParams();

  useEffect(() => {
    getClubComments(clubId)
      .then((result) => setComments(result))
      .catch((error) => {
        console.log(error);
      });
  }, [clubId]);

  return (
    <Container className={CommentsListCSS.commentsContainer}>
      <Typography className={CommentsListCSS.commentHeader}>
        User Comments ({comments.length})
      </Typography>

      {comments.map((commentObject) => (
        <CommentItemCard
          key={commentObject._id}
          commentObject={commentObject}
        />
      ))}

      {comments.length === 0 && <NoComments />}
    </Container>
  );
}
