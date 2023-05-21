import { Box, Typography } from "@mui/material";
import { backgroundColor, borderStyle, fontColor } from "../css/Css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}
    >
      <Typography style={fontColor}>Alexander Damov</Typography>
      <Box>
        {/* {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0 10px",
              borderBottom: item === page ? borderStyle : "",
            }}
            onClick={() =>{
              console.log(item)
             setPage((prev) => {console.log(prev);return item})}}
          >
            {item}
          </Link>
        ))} */}
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
      {/* {navItems.map((item) => 
              <Link key={item}
               to={`/${item}`}
               style={style}>
                {item}</Link>)} */}
    </Box>
  );
};
