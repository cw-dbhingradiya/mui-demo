export const ThemeButton = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 15,
        fontWeight: 600,
        height: 48,
      },
      sizeSmall: {
        width: 48,
        height: 30,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: "22px",
      },
      sizeMedium: {
        height: 36,
      },
      sizeLarge: {
        // width: 42,
        height: 48,
      },
      outlined: {
        ":hover": {
          boxShadow: "currentcolor 0px 0px 0px 0.5px;",
        },
      },
      textPrimary: {
        ":hover": {
          background: "#00A76F14",
        },
      },
      textInfo: {
        ":hover": {
          background: "rgba(0, 184, 217, 0.08)",
        },
      },
      textSuccess: {
        ":hover": {
          background: "rgba(34, 197, 94, 0.08)",
        },
      },
      textWarning: {
        ":hover": {
          background: "rgba(255, 171, 0, 0.08)",
        },
      },
      textError: {
        ":hover": {
          background: "rgba(255, 86, 48, 0.08)",
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        "&.MuiListItemButton-root:hover": {
          backgroundColor: "#919EAB14",
        },
      },
    },
  },
};
