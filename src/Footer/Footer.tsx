import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { backgroundColor, fontColor } from "../css/Css";

export const Footer = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginTop: "auto" }}
    >
      <BottomNavigation sx={{ backgroundColor }}>
        <BottomNavigationAction sx={fontColor} label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction sx={fontColor} label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction sx={fontColor} label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction sx={fontColor} label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction sx={fontColor} label="LinkedIn" icon={<LinkedInIcon />} />
      </BottomNavigation>
    </Box>
  );
};
