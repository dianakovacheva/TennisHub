import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as commentAPI from "../../API/commentAPI";

import AddCommentCSS from "./AddComment.module.css";

export default function AddComment() {
  const navigate = useNavigate();
  const { clubId } = useParams();
  const [refreshCommentsData, setRefreshCommentsData] = useState(false);

  useEffect(() => {
    commentAPI.getAllComments().then(setRefreshCommentsData);
  }, [refreshCommentsData]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const commentData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await commentAPI.addComment({ ...commentData }, clubId);

      if (response) {
        setRefreshCommentsData((status) => !status);

        navigate(`/club/${clubId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      component="form"
      onSubmit={addCommentHandler}
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
