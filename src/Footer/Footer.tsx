import * as React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer data-testid="footer-component">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          backgroundColor: "primary.dark",
          color: "primary.contrastText",
          p: 1,
          boxShadow: 2,
          justifyContent: "center",
        }}
      >
        &copy; {new Date().getFullYear()} - All rights reserved
      </Box>
    </footer>
  );
}
