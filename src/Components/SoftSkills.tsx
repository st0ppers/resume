import { Box, Typography } from "@mui/material";
import {
  fontColor,
  loadingBarBorder,
  loadingBardContent80,
  loadingBardContent90,
  subPointBox,
} from "../css/Css";

export const SoftSkills = () => {
  return (
    <Box sx={{ width: "50%", marginRight: "10%" }}>
      <Typography sx={subPointBox} fontSize={30} color={fontColor}>
        Soft skills
      </Typography>

      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} color={fontColor}>
          Problem solving
        </Typography>
      </Box>
      <Box sx={loadingBarBorder}>
        <Box sx={loadingBardContent90}></Box>
      </Box>

      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} color={fontColor}>
          Time management
        </Typography>
      </Box>
      <Box sx={loadingBarBorder}>
        <Box sx={loadingBardContent90}></Box>
      </Box>

      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} color={fontColor}>
          Analytical thinking
        </Typography>
      </Box>
      <Box sx={loadingBarBorder}>
        <Box sx={loadingBardContent80}></Box>
      </Box>

      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} color={fontColor}>
          Teamwork
        </Typography>
      </Box>
      <Box sx={loadingBarBorder}>
        <Box sx={loadingBardContent80}></Box>
      </Box>

      <Box sx={subPointBox}>
        <Typography fontSize={"14px"} color={fontColor}>
          Communication
        </Typography>
      </Box>
      <Box sx={loadingBarBorder}>
        <Box sx={loadingBardContent80}></Box>
      </Box>
    </Box>
  );
};
