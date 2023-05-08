import { Box, Typography } from "@mui/material";
import { Education } from "../Components/Education";
import { Experience } from "../Components/Experience";
import { ProgrammingSkills } from "../Components/ProgrammingSkills";
import { SoftSkills } from "../Components/SoftSkills";

export const Resume = () => {
   
  return (
    <>
      <Box sx={{ paddingTop: "10%",backgroundColor:"#333",borderBottom:"solid #333"}}>
        <Typography sx={{position:"absolute",top:"90px",left:"50px"}} fontSize={50} color={"white"}>
          Resume
        </Typography>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
        <Education/>
        <Experience/>
      </Box>
      <Box sx={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
        <ProgrammingSkills/>
        <SoftSkills/>
      </Box>
    </>
  );
};
