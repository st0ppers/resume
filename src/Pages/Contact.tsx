import { Box, Typography } from "@mui/material"

export const Contact = () =>{
    
    return(
        <>
      <Box sx={{ paddingTop: "10%",backgroundColor:"#333",borderBottom:"solid #333"}}>
        <Typography sx={{position:"absolute",top:"90px",left:"50px"}} fontSize={50} color={"white"}>
          Contact
        </Typography>
      </Box>
    </>
    )
}