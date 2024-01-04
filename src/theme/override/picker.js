export const DateTime = {
  MuiDateCalendar: {
    styleOverrides: {
      root: {
        height: "auto",
      },
    },
  },
  MuiPickersToolbarButton: {
    styleOverrides: {
      root: {
        height: "auto",
        ":hover": {
          background: "transparent",
        },
      },
    },
  },
  MuiDateTimePickerTabs: {
    styleOverrides: {
      root: {
        marginBottom: "0px",
      },
    },
  },
  MuiPickersPopper: {
    styleOverrides: {
      paper: {
        // background: palette.paperBackground.main,
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: {
        "&.Mui-selected:hover": {
          backgroundColor: "#00A76F",
        },
      },
    },
  },
};
