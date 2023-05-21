import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}
    >
      <Link to={"/"} style={{color:"white",textDecoration: "none"}}>Alexander Damov</Link>
      <Box>
        <Link  to="/" style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0 10px",
            }}
            >Home</Link>
        <Link  to="/Resume" style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0 10px",
            }}
            >Resume</Link>
        <Link  to="/Contact" style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0 10px",
            }}
            >Contact</Link>
      </Box>
    </Box>
  );
};
