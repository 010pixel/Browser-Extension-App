import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar variant="dense">
        <Typography variant="inherit" color="inherit" noWrap>
          Browser Extensions | 010 Pixel
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
