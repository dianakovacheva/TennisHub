import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FooterCSS from "../footer/Footer.module.css";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" className={FooterCSS.developerInfo}>
            Developed by Diana Kovacheva.&nbsp;Source code at&nbsp;
            <Link href="https://github.com/dianakovacheva/TennisHub">
              <img
                className={FooterCSS.footerGithubMark}
                src="../../../public/images/github-mark.svg"
                alt="github-mark"
              />
            </Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
