import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

import AddCommentCSS from "./AddComment.module.css";

export default function AddComment() {
  return (
    <Card className={AddCommentCSS.commentContainer}>
      <CardContent className={AddCommentCSS.cardContent}>
        <Typography className={AddCommentCSS.commentHeader}>
          Leave a comment
        </Typography>
        <TextField
          id={AddCommentCSS["filled-textarea"]}
          label="Write your comment here..."
          required
          multiline
          rows={4}
          variant="filled"
        />
      </CardContent>
      <CardActions className={AddCommentCSS.cardActions}>
        <Button size="small" variant="contained">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
}
