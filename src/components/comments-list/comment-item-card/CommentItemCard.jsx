import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import { Delete } from "@mui/icons-material";

import moment from "moment";

import * as commentAPI from "../../../API/commentAPI";
import CommentItemCardCSS from "./CommentItemCard.module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function CommentItemCard({ commentObject }) {
  const commentId = commentObject._id;
  const navigate = useNavigate();
  const { clubId } = useParams();

  function getCommentSince(created_at) {
    if (!created_at) {
      return "";
    }
    return moment(created_at).fromNow();
  }

  const deleteCommentHandler = async () => {
    const response = await commentAPI.deleteComment(commentId);

    if (response) {
      console.log("Comment deleted successfully!");

      navigate(`/club/${clubId}`);
    }
  };

  return (
    <>
      <Card className={CommentItemCardCSS.commentContainer}>
        <CardContent>
          <div className={CommentItemCardCSS.commentDataContainer}>
            <Avatar>
              {`${commentObject.commentAuthor.firstName[0]}${commentObject.commentAuthor.lastName[0]}`}
            </Avatar>
            <Stack className={CommentItemCardCSS.commentInfo}>
              <Typography className={CommentItemCardCSS.commentAuthor}>
                {`${commentObject.commentAuthor.firstName} ${commentObject.commentAuthor.lastName}`}
              </Typography>
              <Typography color="text.secondary">
                {getCommentSince(commentObject.created_at)}
              </Typography>
            </Stack>
          </div>

          <Typography>{commentObject.comment}</Typography>
        </CardContent>
        <CardActions className={CommentItemCardCSS.cardActions}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<Delete />}
            color="error"
            onClick={deleteCommentHandler}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
