import colors from "./colors";
import spacing from "./spacing";

const MuiButton = {
  styleOverrides: {
    root: {
      border: `1px solid ${colors.titan.darkOrange}`,
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: 700,
      height: "56px",
      minWidth: "100%",
      "@media (min-width: 960px)": {
        minWidth: "160px",
      },
      padding: `${spacing[2]}px`,
      textTransform: "none",
    },
    contained: {
      boxShadow: "none",
      "&:active": {
        boxShadow: "none",
      },
      "&:hover": {
        boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",
      },
      "&.Mui-disabled": {
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
    },
    containedSizeSmall: {
      fontSize: "16px",
      padding: `0 ${spacing[2]}px`,
    },
    containedSizeLarge: {
      fontSize: "16px",
      padding: `${spacing[2]}px`,

      "@media (min-width: 960px)": {
        minWidth: "338px",
      },
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: colors.titan.darkOrange,
      },
    },
    containedSecondary: {
      backgroundColor: colors.titan.darkYellow,
      color: colors.titan.darkGrey,
      border: 0,
      "&:hover": {
        backgroundColor: colors.titan.darkYellow,
        boxShadow: "0 4px 10px rgba(0, 0, 0, .25)",

        "@media (hover: none)": {
          backgroundColor: colors.titan.darkYellow,
        },
      },
    },
    outlinedSizeSmall: {
      fontSize: "16px",
      padding: `${spacing[2]}px`,
    },
    outlinedSizeLarge: {
      fontSize: "16px",
      padding: `0 ${spacing[2]}px`,
      "@media (min-width: 960px)": {
        minWidth: "338px",
      },
    },
    outlinedPrimary: {
      border: `1px solid ${colors.titan.darkOrange}`,
      padding: `${spacing[2]}px`,
      "&:hover": {
        border: `1px solid ${colors.titan.darkOrange}`,
        backgroundColor: colors.titan.darkOrange,
        color: colors.titan.white,

        "@media (hover: none)": {
          backgroundColor: colors.titan.darkOrange,
        },
      },
    },
    text: {
      border: "none",
      fontWeight: 400,
      height: "auto",
      padding: `${spacing[2]}px 0`,
    },
    textSizeSmall: {
      fontSize: "16px",
      fontWeight: 400,
      textAlign: "left",
      lineHeight: 1.5,
      padding: 0,
      minWidth: 0,
    },
    textSizeLarge: {
      fontSize: "16px",
      fontWeight: 400,
      textAlign: "left",
      lineHeight: 1.5,
      padding: 0,
      minWidth: 0,
    },
    textPrimary: {
      color: colors.titan.mauve,
      "&:hover": {
        backgroundColor: colors.titan.white,
        textDecoration: "underline",
      },
    },
    endIcon: {
      marginLeft: "-4px",
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: "30px",
      },
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: "30px",
      },
    },
  },
};

export default MuiButton;
