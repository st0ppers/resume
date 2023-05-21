import { Box } from "@mui/material";
import { containerStyle } from "./css/Css";

interface Props {
  children: React.ReactNode
}
export const Container = (props:Props) => {
  return (
    <Box sx={containerStyle}>
      {props.children}
    </Box>
  );
};
