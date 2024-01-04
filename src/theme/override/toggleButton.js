export const ToggleButton = {
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        border: "1px solid rgba(145, 158, 171, 0.08)",
        padding: "4px",
        borderRadius: 8,
        "& .MuiToggleButtonGroup-grouped": {
          border: "none",
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        "&.Mui-disabled": {
          border: "none",
        },
      },
    },
  },
};
