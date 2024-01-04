export const Input = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          // color: palette.labelText.contrastText,
          color: "#637381",
        },
        "&.Mui-error": {
          // color: palette.error.main,
          color: "#FF5630",
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiInputBase-colorPrimary::after": {
          borderBottom: "2px solid #212B36",
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        "&.MuiFilledInput-root": {
          backgroundColor: "rgba(145, 158, 171, 0.08)",
        },
        "&.MuiFilledInput-root.Mui-focused": {
          backgroundColor: "#919EAB29",
        },
        "&.MuiFilledInput-root::before": {
          borderBottom: "none",
        },
        "&.MuiFilledInput-root::after": {
          borderBottom: "none",
        },
        "&.MuiFilledInput-root.Mui-error": {
          background: "#FF563014",
        },
        "&.MuiFilledInput-root.Mui-disabled": {
          border: "1px dashed rgba(145, 158, 171, 0.20)",
          backgroundColor: "rgba(145, 158, 171, 0.08)",
        },
        "&.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before ": {
          borderBottom: "none",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          // borderColor: palette.grey[800],
          borderColor: "#212B36",
        },
        "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
          border: "1px dashed rgba(145, 158, 171, 0.20)",
        },
      },
      notchedOutline: {
        borderColor: "rgba(145, 158, 171, 0.20)",
      },
    },
  },
};
