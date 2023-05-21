import { Box, Typography } from "@mui/material";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Phone } from "../Components/Phone";
import { Email } from "../Components/Email";

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
        <Phone />
        <Email />
      </Box>
      <Footer />
    </>
  );
};
