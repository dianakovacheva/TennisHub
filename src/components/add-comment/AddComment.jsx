import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

import { useState } from "react";

import AddCommentCSS from "./AddComment.module.css";

export default function AddComment({ addComment }) {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim().length < 2) {
      throw new Error("The comment must be at least 2 characters long.");
    }

    await addComment(newComment);
    e.target.reset();
    setNewComment("");
  };

  return (
    <Card
      component="form"
      onSubmit={handleCommentSubmit}
      className={AddCommentCSS.commentContainer}
    >
      <CardContent className={AddCommentCSS.cardContent}>
        <Typography className={AddCommentCSS.commentHeader}>
          Leave a comment
        </Typography>
        <TextField
          id={AddCommentCSS["filled-textarea"]}
          label="Write your comment here..."
          name="comment"
          autoComplete="Comment"
          type="text"
          required
          multiline
          rows={4}
          variant="filled"
          onChange={(e) => setNewComment(e.target.value)}
        />
      </CardContent>
      <CardActions className={AddCommentCSS.cardActions}>
        <Button size="small" type="submit" variant="contained">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
}
