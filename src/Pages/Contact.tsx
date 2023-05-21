import { Box, Typography } from "@mui/material";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/Mail";

export const Contact = () => {
  return (
    <>
      <Header />
      <Typography
        sx={{
          padding: "1%",
          backgroundColor: "#333",
          borderBottom: "1px solid #4e4e4e",
          borderTop: "1px solid #4e4e4e",
        }}
        fontSize={50}
        color={"white"}
      >
        Contact
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
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
      </Box>
      <Footer />
    </>
  );
};
