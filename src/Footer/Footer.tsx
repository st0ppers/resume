import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { backgroundColor, fontColor } from "../css/Css";

export const Footer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "auto" }}>
      <BottomNavigation sx={{ backgroundColor }}>
        <BottomNavigationAction href="https://www.instagram.com/" sx={fontColor} label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction href="https://www.facebook.com/" sx={fontColor} label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction href="https://github.com/st0ppers" sx={fontColor} label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction href="https://twitter.com/home?lang=bg" sx={fontColor} label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction href="https://www.linkedin.com/in/alexsander-damov-8a634a237/" sx={fontColor} label="LinkedIn" icon={<LinkedInIcon />} />
      </BottomNavigation>
    </Box>
  );
};
