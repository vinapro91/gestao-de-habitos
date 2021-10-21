import { styled as muiStyled } from "@mui/material/styles";
import {
  FormControl as MuiFormControl,
  TextField as MuiTextField,
} from "@mui/material";

export const TextField = muiStyled(MuiTextField)(({ theme }) => ({
  margin: "10px 0",
}));

export const FormControl = muiStyled(MuiFormControl)(({ theme }) => ({
  margin: "15px 0",
}));
