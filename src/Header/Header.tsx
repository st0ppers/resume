import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { backgroundColor, borderStyle,  } from "../css/Css";

export const Header = () => {
  const navItems = ["About me", "Resume", "Contact"];
  const [page,setPage] = useState("About me");

  return (
    <Box>
      <AppBar component="nav" sx={{backgroundColor}} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent:" space-between"}}>
          <Typography>Alexander Damov</Typography>
            <Box >
              {navItems.map((item) => (
                <Button key={item} sx={{ color:"#fff", borderBottom: item === page ?  borderStyle : "" }} 
                onClick={() => {
                    setPage(item);
                 }}>
                  {item}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
