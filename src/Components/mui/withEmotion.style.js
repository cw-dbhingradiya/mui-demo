import { css } from "@emotion/css";

export const themeColor = (theme) =>
  css({
    h2: {
      color: theme.palette.primary.main,
      marginTop: 50,
    },
    ".primarymain": {
      backgroundColor: theme.palette.primary.main,
      width: 372,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #00a76f3d",
    },
    ".primarydarker": {
      backgroundColor: theme.palette.primary.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".primarydark": {
      backgroundColor: theme.palette.primary.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".primarylight": {
      backgroundColor: theme.palette.primary.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".primarylighter": {
      backgroundColor: theme.palette.primary.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".secondarymain": {
      backgroundColor: theme.palette.secondary.main,
      width: 372,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #8e33ff3d",
    },
    ".secondarydarker": {
      backgroundColor: theme.palette.secondary.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".secondarydark": {
      backgroundColor: theme.palette.secondary.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".secondarylight": {
      backgroundColor: theme.palette.secondary.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".secondarylighter": {
      backgroundColor: theme.palette.secondary.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".infomain": {
      backgroundColor: theme.palette.info.main,
      width: 142,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #00b8d93d",
    },
    ".infodarker": {
      backgroundColor: theme.palette.info.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".infodark": {
      backgroundColor: theme.palette.info.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".infolight": {
      backgroundColor: theme.palette.info.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".infolighter": {
      backgroundColor: theme.palette.info.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".successmain": {
      backgroundColor: theme.palette.success.main,
      width: 142,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #22c55e3d",
    },
    ".successdarker": {
      backgroundColor: theme.palette.success.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".successdark": {
      backgroundColor: theme.palette.success.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".successlight": {
      backgroundColor: theme.palette.success.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".successlighter": {
      backgroundColor: theme.palette.success.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".warningmain": {
      backgroundColor: theme.palette.warning.main,
      width: 142,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #ffab003d",
    },
    ".warningdarker": {
      backgroundColor: theme.palette.warning.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".warningdark": {
      backgroundColor: theme.palette.warning.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".warninglight": {
      backgroundColor: theme.palette.warning.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".warninglighter": {
      backgroundColor: theme.palette.warning.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".errormain": {
      backgroundColor: theme.palette.error.main,
      width: 142,
      height: 120,
      borderRadius: 6,
      boxShadow: "0px 8px 16px 0px #ff56303d",
    },
    ".errordarker": {
      backgroundColor: theme.palette.error.darker,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".errordark": {
      backgroundColor: theme.palette.error.dark,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".errorlight": {
      backgroundColor: theme.palette.error.light,
      width: 40,
      height: 24,
      borderRadius: 6,
    },
    ".errorlighter": {
      backgroundColor: theme.palette.error.lighter,
      width: 40,
      height: 24,
      borderRadius: 6,
    },

    ".grey100": {
      backgroundColor: theme.palette.grey[100],
      width: 90,
      height: 88,
      borderRadius: 6,
    },
    ".grey200": {
      backgroundColor: theme.palette.grey[200],
      width: 90,
      height: 92,
      borderRadius: 6,
    },
    ".grey300": {
      backgroundColor: theme.palette.grey[300],
      width: 90,
      height: 96,
      borderRadius: 6,
    },
    ".grey400": {
      backgroundColor: theme.palette.grey[400],
      width: 90,
      height: 100,
      borderRadius: 6,
    },
    ".grey500": {
      backgroundColor: theme.palette.grey[500],
      width: 90,
      height: 104,
      borderRadius: 6,
    },
    ".grey600": {
      backgroundColor: theme.palette.grey[600],
      width: 90,
      height: 108,
      borderRadius: 6,
    },
    ".grey700": {
      backgroundColor: theme.palette.grey[700],
      width: 90,
      height: 112,
      borderRadius: 6,
    },
    ".grey800": {
      backgroundColor: theme.palette.grey[800],
      width: 90,
      height: 116,
      borderRadius: 6,
    },
    ".grey900": {
      backgroundColor: theme.palette.grey[900],
      width: 90,
      height: 120,
      borderRadius: 6,
    },
    ".shadow": {
      boxShadow: theme.shadows[1],
    },
    // ".h1": {
    //   fontSize: theme.typography.h1.fontSize,
    //   fontWeight: theme.typography.h1.fontWeight,
    //   lineHeight: theme.typography.h1.lineHeight,
    // },
    // ".h2": {
    //   fontSize: theme.typography.h2.fontSize,
    //   fontWeight: theme.typography.h2.fontWeight,
    //   lineHeight: theme.typography.h2.lineHeight,
    // },
    // ".h3": {
    //   fontSize: theme.typography.h3.fontSize,
    //   fontWeight: theme.typography.h3.fontWeight,
    //   lineHeight: theme.typography.h3.lineHeight,
    // },
    // ".h4": {
    //   fontSize: theme.typography.h4.fontSize,
    //   fontWeight: theme.typography.h4.fontWeight,
    //   lineHeight: theme.typography.h4.lineHeight,
    // },

    // ".h5": {
    //   fontSize: theme.typography.h5.fontSize,
    //   fontWeight: theme.typography.h5.fontWeight,
    //   lineHeight: theme.typography.h5.lineHeight,
    // },
    // ".h6": {
    //   fontSize: theme.typography.h6.fontSize,
    //   fontWeight: theme.typography.h6.fontWeight,
    //   lineHeight: theme.typography.h6.lineHeight,
    // },
    // ".subtitle1": {
    //   fontSize: theme.typography.subtitle1.fontSize,
    //   fontWeight: theme.typography.subtitle1.fontWeight,
    //   lineHeight: theme.typography.subtitle1.lineHeight,
    // },
    // ".subtitle2": {
    //   fontSize: theme.typography.subtitle2.fontSize,
    //   fontWeight: theme.typography.subtitle2.fontWeight,
    //   lineHeight: theme.typography.subtitle2.lineHeight,
    // },
    // ".body1": {
    //   fontSize: theme.typography.body1.fontSize,
    //   fontWeight: theme.typography.body1.fontWeight,
    //   lineHeight: theme.typography.body1.lineHeight,
    // },
    // ".body2": {
    //   fontSize: theme.typography.body2.fontSize,
    //   fontWeight: theme.typography.body2.fontWeight,
    //   lineHeight: theme.typography.body2.lineHeight,
    // },
    // ".caption": {
    //   fontSize: theme.typography.caption.fontSize,
    //   fontWeight: theme.typography.caption.fontWeight,
    //   lineHeight: theme.typography.caption.lineHeight,
    // },
    // ".overline": {
    //   fontSize: theme.typography.overline.fontSize,
    //   fontWeight: theme.typography.overline.fontWeight,
    //   lineHeight: theme.typography.overline.lineHeight,
    //   textTransform: theme.typography.overline.textTransform,
    // },
  });
