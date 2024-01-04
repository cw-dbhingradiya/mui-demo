export const Switch = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        "& .MuiSwitch-switchBase.Mui-checked ": {
          left: "-1px",
        },
      },
      thumb: {
        width: 14,
        height: 14,
        boxShadow: "none",
      },
      switchBase: {
        top: 6,
        left: 6,
      },
      track: {
        width: 33,
        height: 20,
        borderRadius: 25,
        background: "rgba(145, 158, 171, 0.48)",
      },
      sizeSmall: {
        ".MuiSwitch-track": {
          width: 25,
          height: 16,
        },
        ".MuiSwitch-thumb": {
          width: 10,
          height: 10,
        },
      },
    },
  },
};
