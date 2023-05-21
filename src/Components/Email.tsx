import { Box, Typography } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail";

export const Email = () => {
    return(
        <Box sx={{ width: "50%", marginRight: "10%" }}>
          <Box sx={{ width: "50%", marginLeft: "10%" }}>
            <Box sx={{ textAlign: "center" }}>
              <MailIcon sx={{ fontSize: "50px", color: "white" }} />
            </Box>
            <Box sx={{ textAlign: "center", color: "white" }}>
              <Typography fontSize={25}>Email me</Typography>
            </Box>
            <Box sx={{ textAlign: "center", color: "white" }}>
              <Typography fontSize={20}>alexsander.damov@yahoo.com</Typography>
            </Box>
          </Box>
        </Box>
    )
}