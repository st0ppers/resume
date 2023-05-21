import { Box, Typography } from "@mui/material"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export const Phone = () => {
    return(
        <Box sx={{ width: "50%", marginLeft: "10%" }}>
        <Box sx={{ textAlign: "center" }}>
          <PhoneAndroidIcon sx={{ fontSize: "50px", color: "white" }} />
        </Box>
        <Box sx={{ textAlign: "center", color: "white" }}>
          <Typography fontSize={25}>Call me</Typography>
        </Box>
        <Box sx={{ textAlign: "center", color: "white" }}>
          <Typography fontSize={20}>089-241-0428</Typography>
        </Box>
      </Box>
    )
}