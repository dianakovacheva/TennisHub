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

import CommentItemCardCSS from "./CommentItemCard.module.css";

export default function CommentItemCard({
  commentObject,
  deleteCommentHandler,
}) {
  const commentId = commentObject._id;

  function getCommentSince(created_at) {
    if (!created_at) {
      return "";
    }
    return moment(created_at).fromNow();
  }

  // const deleteCommentHandler = async () => {
  //   const [deleteComment, setDeleteComment] = useState(false);

  //   try {
  //     const response = await commentAPI.deleteComment(commentId);

  //     if (response) {
  //       console.log("Comment deleted successfully!");

  //       setDeleteComment((curr) => !curr);
  //       navigate(`/club/${clubId}`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Card className={CommentItemCardCSS.commentContainer}>
        <CardContent>
          <div className={CommentItemCardCSS.commentDataContainer}>
            <Avatar>
              {`${commentObject?.commentAuthor.firstName[0]}${commentObject?.commentAuthor.lastName[0]}`}
            </Avatar>
            <Stack className={CommentItemCardCSS.commentInfo}>
              <Typography className={CommentItemCardCSS.commentAuthor}>
                {`${commentObject?.commentAuthor.firstName} ${commentObject?.commentAuthor.lastName}`}
              </Typography>
              <Typography color="text.secondary">
                {getCommentSince(commentObject.created_at)}
              </Typography>
            </Stack>
          </div>

          <Typography>{commentObject?.comment}</Typography>
        </CardContent>
        <CardActions className={CommentItemCardCSS.cardActions}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<Delete />}
            color="error"
            onClick={() => deleteCommentHandler(commentId)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
