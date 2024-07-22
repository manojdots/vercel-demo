import { createTheme } from "@mui/material";
import MuiButton from "./button";
import breakpoints from "./breakpoints";
import colors from "./colors";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";

const overrides = {
  breakpoints,
  colors,
  components: {
    MuiButton,
  },
  palette,
  typography,
  spacing,
};

const theme = createTheme(overrides);

export default theme;
