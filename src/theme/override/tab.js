export const Tab = {
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        fontSize: 14,
        fontWeight: 600,
        minHeight: "auto",
        textAlign: "left",
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        marginBottom: 40,
        color: "#637381",
        "& .Mui-selected": {
          color: "#212B36",
        },
      },
      // indicator: {
      //   backgroundColor: "#212B36",
      // },
    },
  },
};
