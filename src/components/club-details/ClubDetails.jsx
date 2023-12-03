import AddComment from "../add-comment/AddComment";
import ClubDetailsCard from "../club-details-card/ClubDetailsCard";
import CommentsList from "../comments-list/CommentsList";

import { Divider } from "@mui/material";

import ClubDetailsCSS from "./ClubDetails.module.css";

export default function ClubDetails() {
  return (
    <div className={ClubDetailsCSS.detailsPageContainer}>
      <ClubDetailsCard />
      <Divider className={ClubDetailsCSS.divider} variant="middle" />
      <AddComment />
      <CommentsList />
    </div>
  );
}
