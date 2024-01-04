export const Table = {
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "#919EAB29",
        },
        "&.Mui-selected:hover": {
          backgroundColor: "#919EAB29",
        },
      },
      head: {
        background: "#F4F6F8",
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: "#637381",
        fontSize: 14,
        fontWeight: 600,
      },
      body: {
        fontSize: 14,
        fontWeight: 400,
        borderBottom: "1px dashed rgba(145, 158, 171, 0.20)",
      },
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        "&.Mui-active": {
          color: "#637381",
        },
        ":hover": {
          color: "#637381",
        },
      },
    },
  },
};
