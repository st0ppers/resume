import { Box, Typography } from "@mui/material";
import {
  fontColor,
  subPoint,
  subPointBox,
  subPointContent,
  subhead,
} from "../css/Css";

export const Experience = () => {
  return (
    <Box sx={{ width: "50%", marginRight: "10%" }}>
      <Typography sx={subPointBox} fontSize={30} color={fontColor}>
        Experience
      </Typography>
      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} style={subPoint}>
          2022 - Current
        </Typography>
        <Box sx={subhead}>DraftKings</Box>
      </Box>
      <Box sx={subPointContent}>
        <Typography sx={fontColor}>Fullstack software developer</Typography>
      </Box>
    </Box>
  );
};
