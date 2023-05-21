import { Box, Typography } from "@mui/material";
import { Education } from "../Components/Education";
import { Experience } from "../Components/Experience";
import { ProgrammingSkills } from "../Components/ProgrammingSkills";
import { SoftSkills } from "../Components/SoftSkills";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Resume = () => {
   
  return (
    <>
      <Header />
      <Typography sx={{padding: "1%",backgroundColor:"#333",borderBottom:"1px solid #4e4e4e",borderTop:"1px solid #4e4e4e"}} fontSize={50} color={"white"}>
          Resume
        </Typography>
      <Box sx={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
        <Education/>
        <Experience/>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
        <ProgrammingSkills/>
        <SoftSkills/>
      </Box>
      <Footer />
    </>
  );
};
