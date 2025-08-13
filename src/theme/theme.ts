import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const colors = {
  darkBlueElements: "hsl(209, 23%, 22%)",
  veryDarkBlueBg: "hsl(207, 26%, 17%)",
  veryDarkBlueText: "hsl(200, 15%, 8%)",
  darkGrayInput: "hsl(0, 0%, 52%)",
  veryLightGrayBg: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
};

const baseTypography = {
  fontFamily: `"Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,

  h6: { fontWeight: 800 },
  body2: { fontSize: "14px" },
  body1: { fontSize: "16px" },
} as const;

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: { main: colors.veryDarkBlueText },
      text: {
        primary: colors.veryDarkBlueText,
        secondary: colors.darkGrayInput,
      },
      background: {
        default: colors.veryLightGrayBg,
        paper: colors.white,
      },
      divider: "hsla(0,0%,0%,0.08)",
    },
    typography: baseTypography,
    shape: { borderRadius: 2 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.veryLightGrayBg,
            color: colors.veryDarkBlueText,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: colors.white,
            color: colors.veryDarkBlueText,
          },
        },
        defaultProps: { color: "primary", elevation: 2, position: "fixed" },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundColor: colors.white } },
      },
      MuiFormControl: {
        defaultProps: { size: "small" },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary,
            "&.Mui-focused": {
              color: theme.palette.primary.main,
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.divider,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.secondary,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
          }),
        },
      },
      MuiSelect: {
        defaultProps: {
          displayEmpty: true,
        },
        styleOverrides: {
          icon: ({ theme }) => ({
            color: theme.palette.text.secondary,
          }),
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[8],
          }),
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: colors.white,
            },
            "& .MuiInputLabel-root": { color: colors.darkGrayInput },
          },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: "xl" },
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: { main: colors.white },
      text: {
        primary: colors.white,
        secondary: "hsla(0,0%,100%,0.7)",
      },
      background: {
        default: colors.veryDarkBlueBg,
        paper: colors.darkBlueElements,
      },
      divider: "hsla(0,0%,100%,0.12)",
    },
    typography: baseTypography,
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.veryDarkBlueBg,
            color: colors.white,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: colors.darkBlueElements,
            color: colors.white,
          },
        },
        defaultProps: { color: "primary", elevation: 2, position: "fixed" },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundColor: colors.darkBlueElements } },
      },
      MuiFormControl: {
        defaultProps: { size: "small" },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary,
            "&.Mui-focused": {
              color: theme.palette.primary.main,
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.divider,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.text.secondary,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
          }),
        },
      },
      MuiSelect: {
        defaultProps: {
          displayEmpty: true,
        },
        styleOverrides: {
          icon: ({ theme }) => ({
            color: theme.palette.text.secondary,
          }),
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[8],
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: colors.darkBlueElements,
            },
            "& .MuiInputLabel-root": { color: "hsla(0,0%,100%,0.7)" },
          },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: "xl" },
      },
    },
  })
);
