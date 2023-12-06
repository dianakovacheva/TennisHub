import { Container, Typography } from "@mui/material";

import CommentItemCard from "./comment-item-card/CommentItemCard";
import CommentsListCSS from "./CommentsList.module.css";
import NoComments from "../no-comments/NoComments";

export default function CommentsList({ comments, deleteCommentHandler }) {
  return (
    <Container className={CommentsListCSS.commentsContainer}>
      <Typography className={CommentsListCSS.commentHeader}>
        User Comments ({comments.length})
      </Typography>

      {comments.map((commentObject) => (
        <CommentItemCard
          key={commentObject._id}
          commentObject={commentObject}
          deleteCommentHandler={deleteCommentHandler}
        />
      ))}
      {comments.length === 0 && <NoComments />}
    </Container>
  );
}
