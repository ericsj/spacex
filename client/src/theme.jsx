import { createTheme } from "@mui/material/styles";

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: '20px'
          },
        },
      },
    },
  },
);
