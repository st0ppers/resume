import { Box, Typography } from "@mui/material";
import {
  fontColor,
  loadingBarBorder,
  loadingBardContent60,
  loadingBardContent70,
  loadingBardContent80,
  loadingBardContent85,
  loadingBardContent90,
  subPointBox,
} from "../css/Css";

export const ProgrammingSkills = () => (
  <Box sx={{ width: "50%", marginLeft: "10%" }}>
    <Typography sx={subPointBox} fontSize={30} color={fontColor}>
      Programming skills
    </Typography>

    <Box sx={subPointBox}>
      <Typography fontSize={"14px"} color={fontColor}>
        C#
      </Typography>
    </Box>
    <Box sx={loadingBarBorder}>
      <Box sx={loadingBardContent90}></Box>
    </Box>

    <Box sx={subPointBox}>
      <Typography fontSize={"14px"} color={fontColor}>
        HTML/CSS
      </Typography>
    </Box>
    <Box sx={loadingBarBorder}>
      <Box sx={loadingBardContent85}></Box>
    </Box>

    <Box sx={subPointBox}>
      <Typography fontSize={"14px"} color={fontColor}>
        Typescript
      </Typography>
    </Box>
    <Box sx={loadingBarBorder}>
      <Box sx={loadingBardContent80}></Box>
    </Box>

    <Box sx={subPointBox}>
      <Typography fontSize={"14px"} color={fontColor}>
        React.js
      </Typography>
    </Box>
    <Box sx={loadingBarBorder}>
      <Box sx={loadingBardContent70}></Box>
    </Box>

    <Box sx={subPointBox}>
      <Typography fontSize={"14px"} color={fontColor}>
        SQL
      </Typography>
    </Box>
    <Box sx={loadingBarBorder}>
      <Box sx={loadingBardContent60}></Box>
    </Box>
  </Box>
);
