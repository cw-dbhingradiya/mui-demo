import { COLORS, light_colors, dark_colors } from "../constant/Constant";

export const commonColor = {
  primary: {
    main: COLORS.primary,
    darker: COLORS.primaryDarker,
    dark: COLORS.primaryDark,
    light: COLORS.primaryLight,
    lighter: COLORS.primaryLighter,
    contrastText: COLORS.primaryContrastText,
    soft: COLORS.primarySoft,
  },
  secondary: {
    main: COLORS.secondary,
    darker: COLORS.secondaryDarker,
    dark: COLORS.secondaryDark,
    light: COLORS.secondaryLight,
    lighter: COLORS.secondaryLighter,
    contrastText: COLORS.secondaryContrastText,
    soft: COLORS.secondarySoft,
  },
  info: {
    main: COLORS.info,
    darker: COLORS.infoDarker,
    dark: COLORS.infoDark,
    light: COLORS.infoLight,
    lighter: COLORS.infoLighter,
    contrastText: COLORS.infoContrastText,
    soft: COLORS.infoSoft,
  },
  success: {
    main: COLORS.success,
    darker: COLORS.successDarker,
    dark: COLORS.successDark,
    light: COLORS.successLight,
    lighter: COLORS.successLighter,
    contrastText: COLORS.successContrastText,
    soft: COLORS.successSoft,
  },
  warning: {
    main: COLORS.warning,
    darker: COLORS.warningDarker,
    dark: COLORS.warningDark,
    light: COLORS.warningLight,
    lighter: COLORS.warningLighter,
    soft: COLORS.warningSoft,
  },
  error: {
    main: COLORS.error,
    darker: COLORS.errorDarker,
    dark: COLORS.errorDark,
    light: COLORS.errorLight,
    lighter: COLORS.errorLighter,
    soft: COLORS.errorSoft,
  },
  grey: {
    100: COLORS[100],
    200: COLORS[200],
    300: COLORS[300],
    400: COLORS[400],
    500: COLORS[500],
    600: COLORS[600],
    700: COLORS[700],
    800: COLORS[800],
    900: COLORS[900],
  },
  greyText: {
    main: COLORS.greyText,
    contrastText: COLORS.greyTextContrastText,
  },
  greyTextDark: {
    contrastText: COLORS.greyTextDarkContrastText,
  },
  greyDark: {
    main: COLORS.greyDark,
    contrastText: COLORS.greyDarkContrastText,
  },
  greyLight: {
    main: COLORS.greyLight,
    contrastText: COLORS.greyLightContrastText,
  },
  action: {
    selected: COLORS.actionSelected,
  },
  custom: {
    main: COLORS.custom,
    dark: COLORS.customDark,
    contrastText: COLORS.customContrastText,
  },
};

export const colorsLight = {
  mode: "light",

  breadText: {
    main: light_colors.breadText,
  },

  greyBg: {
    main: light_colors.greyBg,
    contrastText: light_colors.greyBgContrastText,
  },
  buttonDefault: {
    main: light_colors.buttonDefault,
    contrastText: light_colors.buttonDefaultContrastText,
  },
  buttonOutlined: {
    contrastText: light_colors.buttonOutlinedContrastText,
  },
  neutral: {
    main: light_colors.neutral,
    contrastText: light_colors.neutralContrastText,
  },
  neutralBorder: {
    main: light_colors.neutralBorder,
    contrastText: light_colors.neutralBorderContrastText,
  },

  paperBackground: {
    main: light_colors.paperBackground,
  },

  labelText: {
    contrastText: light_colors.labelText,
  },

  shadows: light_colors.shadows,
};

export const colorsDark = {
  mode: "dark",
  text: {
    primary: "#fff",
    secondary: "#fff",
  },
  breadText: {
    main: dark_colors.breadText,
  },
  greyBg: {
    main: dark_colors.greyBg,
    contrastText: dark_colors.greyBgContrastText,
  },
  buttonDefault: {
    main: dark_colors.buttonDefault,
    contrastText: dark_colors.buttonDefaultContrastText,
  },
  neutral: {
    main: dark_colors.neutral,
    contrastText: dark_colors.neutralContrastText,
  },
  neutralBorder: {
    main: dark_colors.neutralBorder,
    contrastText: dark_colors.neutralBorderContrastText,
  },

  paperBackground: {
    main: dark_colors.paperBackground,
  },

  labelText: {
    contrastText: dark_colors.labelText,
  },

  shadows: dark_colors.shadows,
};
