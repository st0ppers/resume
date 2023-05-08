import { Box, Typography } from "@mui/material";
import {
  fontColor,
  subPoint,
  subPointBox,
  subPointContent,
  subhead,
} from "../css/Css";

export const Education = () => {
  return (
    <Box sx={{ width: "50%", marginLeft: "10%" }}>
      <Typography sx={subPointBox} fontSize={30} color={fontColor}>
        Education
      </Typography>
      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} style={subPoint}>
          2014 - 2019
        </Typography>
        <Box sx={subhead}>Highschool diploma</Box>
      </Box>
      <Box sx={subPointContent}>
        <Typography sx={fontColor}>PGASG “Architect Kamen Petkov”</Typography>
      </Box>
      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} style={subPoint}>
          2021 - Current
        </Typography>
        <Box sx={subhead}>Bachelor's degree</Box>
      </Box>
      <Box sx={subPointContent}>
        <Typography color={fontColor}>
          Paisii Hilendarski University of Plovdiv-Plovdiv
        </Typography>
      </Box>
    </Box>
  );
};
