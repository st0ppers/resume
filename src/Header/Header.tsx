import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { backgroundColor, borderStyle,  } from "../css/Css";
import { Link, Navigate } from "react-router-dom";

export const Header = () => {
  const navItems = ["Home", "Resumee", "Contact"];
  const [page,setPage] = useState("About Me");

  return (
    <Box>
      <AppBar component="nav" sx={{backgroundColor}} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent:" space-between"}}>
          <Typography>Alexander Damov</Typography>
            <Box >
              {navItems.map((item) => (
              <a key={item} 
              onClick={() =>  setPage(item)}
              style={{color:"#fff",textDecoration:"none",padding:"0 10px",borderBottom: item === page ?  borderStyle : ""}} 
              href={item}>{item}</a>))}
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
