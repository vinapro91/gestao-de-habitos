import { styled as muiStyled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

export const TextField = muiStyled(MuiTextField)(({ theme }) => ({
  margin: "10px 0",
}));
