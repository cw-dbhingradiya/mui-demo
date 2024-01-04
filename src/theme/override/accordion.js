export const ThemeAccordion = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: 8,
        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
        "&.Mui-expanded": {
          boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
        },
        ":first-of-type": {
          borderRadius: 8,
        },
        background: "transparent",
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: "0 8px 0 16px",
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { padding: "8px 16px 16px" },
    },
  },
};
