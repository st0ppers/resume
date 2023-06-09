import { Box, Typography } from "@mui/material";
import { fontColor } from "../css/Css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Home = () => {
  return (
    <>
    <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <img
          style={{
            borderRadius: "160px",
            height: "200px",
            width: "200px",
            padding: "30px",
          }}
          alt=""
          src={require("../images/bogdan.jpg")}
        ></img>
        <Box sx={{ padding: "20px" }}>
          <Typography sx={fontColor} fontSize={50}>
            Hello,
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            {/* maybe add a different const to the css file with name:"color:"#fff",width:"50%" */}
            I am <b>Alexander Damov</b>, junior full stack developer currently
            working in DraftKings.
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Also I am pursuing a bachelors degree in Software technology.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
