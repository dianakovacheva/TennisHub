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

export default function CourtsTable({
  isClubOwner,
  courts,
  requestRefreshHandler,
}) {
  const deleteCourtHandler = async (courtId) => {
    try {
      const response = await courtAPI.deleteCourt(courtId);
      console.log(response);

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
                    {courtObject.lightning ? (
                      <CheckAvailable />
                    ) : (
                      <CheckUnavailable />
                    )}
                  </TableCell>
                  {isClubOwner && (
                    <TableCell component="th" scope="row" align="center">
                      <Button startIcon={<Edit />}></Button>
                      <Button
                        startIcon={<Delete />}
                        onClick={() => deleteCourtHandler(courtObject._id)}
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
