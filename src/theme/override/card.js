export const Card = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)",
        // backgroundColor: palette.paperBackground.main,
        // width: 300,
        // ":hover": {
        //   border: "2px solid #212B36",
        // },
      },
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        height: 345,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 0,
        paddingBottom: 24,
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "24px 24px 0px",
      },
    },
  },
};
