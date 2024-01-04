export const List = {
  MuiList: {
    styleOverrides: {
      root: {
        width: "100%",
        maxWidth: 500,
        // background: palette.paperBackground.main,
      },
    },
  },
  MuiListSubheader: {
    styleOverrides: {
      root: {
        fontSize: 20,
        fontWeight: 700,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "#919EAB29",
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        lineHeight: "22px",
        fontSize: 14,
      },
      secondary: {
        fontWeight: 400,
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        paddingRight: 2,
        minWidth: 40,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        ":hover": {
          backgroundColor: "#919EAB14",
        },
      },
    },
  },
};
