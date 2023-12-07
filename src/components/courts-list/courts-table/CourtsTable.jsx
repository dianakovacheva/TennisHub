import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import {
  CheckCircleOutline as CheckAvailable,
  HighlightOff as CheckUnavailable,
  Delete,
  Edit,
} from "@mui/icons-material";

import * as courtAPI from "../../../API/courtAPI";
import { useParams, useNavigate } from "react-router-dom";

export default function CourtsTable({
  isClubOwner,
  courts,
  requestRefreshHandler,
}) {
  const navigate = useNavigate();

  const editCourtHandler = async (courtId, clubId) => {
    // try {
    //   const respone = await courtAPI.editCourt(courtId, clubId);

    //   if (respone._id) {
    //     navigate(`/club/${clubId}/court/${courtId}/edit-court`);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    navigate(`/club/${clubId}/court/${courtId}/edit-court`);
  };

  const deleteCourtHandler = async (courtId, clubId) => {
    try {
      const response = await courtAPI.deleteCourt(courtId, clubId);

      if (response._id) {
        requestRefreshHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {courts.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Court Name</TableCell>
                <TableCell align="center">Surface</TableCell>
                <TableCell align="center">Indoor</TableCell>
                <TableCell align="center">Lighting</TableCell>
                {isClubOwner && <TableCell align="center">Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {courts.map((courtObject) => (
                <TableRow
                  key={courtObject._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {courtObject.courtName}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {`${courtObject.surface}`}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {courtObject.indoor ? (
                      <CheckAvailable />
                    ) : (
                      <CheckUnavailable />
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {courtObject.lighting ? (
                      <CheckAvailable />
                    ) : (
                      <CheckUnavailable />
                    )}
                  </TableCell>
                  {isClubOwner && (
                    <TableCell component="th" scope="row" align="center">
                      <Button
                        startIcon={<Edit />}
                        onClick={() =>
                          editCourtHandler(
                            courtObject?._id,
                            courtObject?.clubId
                          )
                        }
                      ></Button>
                      <Button
                        startIcon={<Delete />}
                        onClick={() =>
                          deleteCourtHandler(
                            courtObject._id,
                            courtObject.clubId
                          )
                        }
                      ></Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
