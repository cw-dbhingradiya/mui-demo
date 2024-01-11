import { createTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { commonColor } from "./color";
import { customShadows } from "./custom-shadows";
import { deepmerge } from "@mui/utils";

export const theme = (palette) => ({
  typography: {
    fontFamily: "Public Sans",
    h1: {
      fontWeight: 800,
      fontSize: 64,
      lineHeight: 2,
      boxShadow: 1,
    },
    h2: {
      fontWeight: 800,
      fontSize: 48,
      lineHeight: 2,
    },
    h3: {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 2,
    },
    h4: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 2,
    },
    h5: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 2,
    },
    h6: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 2,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 2,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 2,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 2,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 2,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 2,
      display: "block",
    },
    overline: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 2,
    },
  },
  spacing: 4,
  shadows: { ...palette.shadows },
  // button: {
  //   "&:hover": {
  //     backgroundColor: "#fff",
  //     color: "#3c52b2",
  //   },
  // },
  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: {
  //         color: "#fff",
  //         fontSize: 14,
  //         fontWeight: 400,
  //         alignItems: "center",
  //         borderRadius: 8,
  //       },
  //       filledWarning: {
  //         color: "black",
  //       },
  //       standardInfo: {
  //         backgroundColor: "#CAFDF5",
  //         color: "#003768",
  //       },
  //       standardSuccess: {
  //         backgroundColor: "#D3FCD2",
  //         color: "#065E49",
  //       },
  //       standardWarning: {
  //         backgroundColor: "#FFF5CC",
  //         color: "#7A4100",
  //       },
  //       standardError: {
  //         backgroundColor: "#FFE9D5",
  //         color: "#7A0916",
  //       },
  //       outlinedInfo: {
  //         color: "#006C9C",
  //         border: "1px solid rgba(0, 184, 217, 0.16)",
  //         background: "rgba(0, 184, 217, 0.08)",
  //       },
  //       outlinedSuccess: {
  //         color: "#118D57",
  //         border: "1px solid rgba(34, 197, 94, 0.16)",
  //         background: "rgba(34, 197, 94, 0.08)",
  //       },
  //       outlinedWarning: {
  //         color: "#B76E00",
  //         border: "1px solid rgba(255, 171, 0, 0.16)",
  //         background: "rgba(255, 171, 0, 0.08)",
  //       },
  //       outlinedError: {
  //         color: "#B71D18",
  //         border: "1px solid rgba(255, 86, 48, 0.16)",
  //         background: "rgba(255, 86, 48, 0.08)",
  //       },
  //     },
  //   },
  //   MuiAvatar: {
  //     styleOverrides: {
  //       colorDefault: {
  //         color: "#fff",
  //         fontSize: 12,
  //         fontWeight: 500,
  //       },
  //     },
  //   },
  //   MuiButtonBase: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //   },
  //   MuiBreadcrumbs: {
  //     styleOverrides: {
  //       separator: {
  //         marginLeft: 16,
  //         marginRight: 16,
  //       },
  //     },
  //   },
  //   MuiFab: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: "capitalize",
  //       },
  //     },
  //   },
  //   MuiToggleButtonGroup: {
  //     styleOverrides: {
  //       root: {
  //         border: "1px solid rgba(145, 158, 171, 0.08)",
  //         padding: "4px",
  //         borderRadius: 8,
  //         "& .MuiToggleButtonGroup-grouped": {
  //           border: "none",
  //         },
  //       },
  //     },
  //   },
  //   MuiToggleButton: {
  //     styleOverrides: {
  //       root: {
  //         display: "flex",
  //         alignItems: "center",
  //         gap: "10px",
  //       },
  //     },
  //   },
  //   MuiMenu: {
  //     styleOverrides: {
  //       root: {
  //         width: 460,
  //         maxWidth: 460,
  //       },
  //     },
  //   },
  //   MuiList: {
  //     styleOverrides: {
  //       root: {
  //         width: "100%",
  //         maxWidth: 500,
  //         background: palette.paperBackground.main,
  //       },
  //     },
  //   },
  //   MuiListSubheader: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: 20,
  //         fontWeight: 700,
  //       },
  //     },
  //   },
  //   MuiListItemText: {
  //     styleOverrides: {
  //       primary: {
  //         lineHeight: "22px",
  //       },
  //       secondary: {
  //         fontWeight: 400,
  //       },
  //     },
  //   },
  //   MuiListItemIcon: {
  //     styleOverrides: {
  //       root: {
  //         paddingRight: 2,
  //         minWidth: 40,
  //       },
  //     },
  //   },
  //   MuiChip: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //         fontSize: 13,
  //       },
  //       deleteIcon: {
  //         fontSize: 18,
  //       },
  //     },
  //   },
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 16,
  //         backgroundColor: palette.paperBackground.main,
  //         width: 300,
  //         // ":hover": {
  //         //   border: "2px solid #212B36",
  //         // },
  //       },
  //     },
  //   },
  //   MuiCardMedia: {
  //     styleOverrides: {
  //       root: {
  //         height: 345,
  //       },
  //     },
  //   },
  //   MuiCardContent: {
  //     styleOverrides: {
  //       root: {
  //         padding: 24,
  //       },
  //     },
  //   },
  //   MuiCardActions: {
  //     styleOverrides: {
  //       root: {
  //         paddingLeft: 24,
  //         paddingRight: 24,
  //         paddingTop: 0,
  //         paddingBottom: 24,
  //       },
  //     },
  //   },
  //   MuiStack: {
  //     styleOverrides: {
  //       root: {
  //         gap: 20,
  //       },
  //     },
  //     defaultProps: {
  //       useFlexGap: true,
  //     },
  //   },
  //   MuiButtonGroup: {
  //     styleOverrides: {
  //       groupedContainedSecondary: {
  //         textTransform: "capitalize",
  //         fontSize: 14,
  //         "&:hover": {
  //           background: palette.primary.dark,
  //         },
  //       },
  //       groupedContainedPrimary: {
  //         textTransform: "capitalize",
  //       },
  //       groupedOutlinedSecondary: {
  //         textTransform: "capitalize",
  //       },
  //       groupedOutlinedPrimary: {
  //         textTransform: "capitalize",
  //         fontSize: 14,
  //       },
  //       groupedTextSecondary: {
  //         textTransform: "capitalize",
  //       },
  //       groupedTextPrimary: {
  //         textTransform: "capitalize",
  //         fontSize: 14,
  //       },
  //     },
  //   },
  //   MuiPaginationItem: {
  //     styleOverrides: {
  //       outlinedPrimary: {
  //         border: "1px solid rgba(145, 158, 171, 0.32)",
  //       },
  //       ellipsis: {
  //         border: "none",
  //       },
  //     },
  //   },
  //   MuiRating: {
  //     styleOverrides: {
  //       iconEmpty: { color: palette.grey[500], opacity: 0.48 },
  //     },
  //   },
  //   MuiFormGroup: {
  //     styleOverrides: {
  //       root: {
  //         gap: 20,
  //       },
  //     },
  //   },
  //   MuiTooltip: {
  //     styleOverrides: {
  //       tooltip: {
  //         backgroundColor: palette.grey[800],
  //         borderRadius: 6,
  //         fontSize: "12px",
  //         fontWeight: 400,
  //         lineHeight: "18px",
  //       },
  //       arrow: {
  //         color: palette.grey[800],
  //       },
  //     },
  //   },
  //   MuiTimelineDot: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: "none",
  //         color: palette.custom.contrastText,
  //       },
  //     },
  //   },
  //   MuiTimelineConnector: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: palette.greyLight.main,
  //       },
  //     },
  //   },
  //   MuiTimelineItem: {
  //     styleOverrides: {
  //       root: {
  //         ":before": {
  //           display: "contents",
  //         },
  //       },
  //     },
  //   },
  //   MuiTab: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: "capitalize",
  //         fontSize: 14,
  //         fontWeight: 600,
  //         minHeight: "auto",
  //         textAlign: "left",
  //       },
  //     },
  //   },
  //   MuiTabs: {
  //     styleOverrides: {
  //       root: {
  //         marginBottom: 40,
  //       },
  //       indicator: {
  //         backgroundColor: palette.grey[800],
  //       },
  //     },
  //   },
  //   MuiDialog: {
  //     styleOverrides: {
  //       paper: {
  //         borderRadius: 16,
  //         background: palette.paperBackground.main,
  //       },
  //     },
  //   },
  //   MuiDialogTitle: {
  //     styleOverrides: {
  //       root: {
  //         padding: "24px 12px 24px 24px",
  //       },
  //     },
  //   },
  //   MuiDialogContent: {
  //     styleOverrides: {
  //       root: {
  //         padding: "0 24px",
  //       },
  //     },
  //   },
  //   MuiDialogContentText: {
  //     styleOverrides: {
  //       root: {
  //         lineHeight: "26px",
  //       },
  //     },
  //   },
  //   MuiDialogActions: {
  //     styleOverrides: {
  //       root: {
  //         padding: 24,
  //       },
  //     },
  //   },
  //   MuiDateCalendar: {
  //     styleOverrides: {
  //       root: {
  //         height: "auto",
  //       },
  //     },
  //   },
  //   MuiPickersToolbarButton: {
  //     styleOverrides: {
  //       root: {
  //         height: "auto",
  //       },
  //     },
  //   },
  //   MuiDateTimePickerTabs: {
  //     styleOverrides: {
  //       root: {
  //         marginBottom: "0px",
  //       },
  //     },
  //   },
  //   MuiPickersPopper: {
  //     styleOverrides: {
  //       paper: {
  //         background: palette.paperBackground.main,
  //       },
  //     },
  //   },
  //   MuiStepper: {
  //     styleOverrides: {
  //       root: {
  //         paddingTop: 20,
  //       },
  //     },
  //   },
  //   MuiPopover: {
  //     styleOverrides: {
  //       paper: {
  //         backgroundImage: "linear-gradient(to left, #00B8D91F, #FF56301F)",
  //       },
  //     },
  //   },
  //   MuiLink: {
  //     styleOverrides: {
  //       root: {
  //         display: "flex",
  //         gap: 4,
  //       },
  //     },
  //   },
  //   MuiSnackbarContent: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //         boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
  //         background: palette.paperBackground.main,
  //         color: palette.buttonDefault.main,
  //         padding: "8px 16px 8px 8px",
  //         fontSize: 14,
  //       },
  //       message: {
  //         padding: 0,
  //       },
  //     },
  //   },
  //   MuiFormLabel: {
  //     styleOverrides: {
  //       root: {
  //         color: "#919EAB",
  //         "&.MuiInputLabel.Mui-focused": {
  //           color: "red",
  //         },
  //       },
  //     },
  //   },
  //   MuiInputLabel: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-focused": {
  //           color: palette.labelText.contrastText,
  //         },
  //         "&.Mui-error": {
  //           color: palette.error.main,
  //         },
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         "&.MuiInputBase-colorPrimary::after": {
  //           borderBottom: "2px solid #212B36",
  //         },
  //       },
  //     },
  //   },
  //   MuiFilledInput: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //         "&.MuiFilledInput-root": {
  //           backgroundColor: "rgba(145, 158, 171, 0.08)",
  //         },
  //         "&.MuiFilledInput-root.Mui-focused": {
  //           backgroundColor: "#919EAB29",
  //         },
  //         "&.MuiFilledInput-root::before": {
  //           borderBottom: "none",
  //         },
  //         "&.MuiFilledInput-root::after": {
  //           borderBottom: "none",
  //         },
  //         "&.MuiFilledInput-root.Mui-error": {
  //           background: "#FF563014",
  //         },
  //         "&.MuiFilledInput-root.Mui-disabled": {
  //           border: "1px dashed rgba(145, 158, 171, 0.20)",
  //           backgroundColor: "rgba(145, 158, 171, 0.08)",
  //         },
  //         "&.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before ":
  //           {
  //             borderBottom: "none",
  //           },
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //           borderColor: palette.grey[800],
  //         },
  //         "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
  //           border: "1px dashed rgba(145, 158, 171, 0.20)",
  //         },
  //       },
  //       notchedOutline: {
  //         borderColor: "rgba(145, 158, 171, 0.20)",
  //       },
  //     },
  //   },
  //   MuiSlider: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-disabled .MuiSlider-track": {
  //           backgroundColor: palette.greyLight.contrastText,
  //           borderColor: "#c4cdd5",
  //         },
  //       },
  //       valueLabel: {
  //         background: palette.grey[800],
  //         borderRadius: 4,
  //         padding: "3px 6px",
  //         fontSize: 12,
  //       },
  //     },
  //   },
  //   MuiSwitch: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiSwitch-switchBase.Mui-checked ": {
  //           left: "-1px",
  //         },
  //       },
  //       thumb: {
  //         width: 14,
  //         height: 14,
  //         boxShadow: "none",
  //       },
  //       switchBase: {
  //         top: 6,
  //         left: 6,
  //       },
  //       track: {
  //         width: 33,
  //         height: 20,
  //         borderRadius: 25,
  //         background: "rgba(145, 158, 171, 0.48)",
  //       },
  //       sizeSmall: {
  //         ".MuiSwitch-track": {
  //           width: 25,
  //           height: 16,
  //         },
  //         ".MuiSwitch-thumb": {
  //           width: 10,
  //           height: 10,
  //         },
  //       },
  //     },
  //   },
  //   MuiTableRow: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-selected": {
  //           backgroundColor: "#F4F6F8",
  //         },
  //         ".Mui-selected:`hover": {
  //           backgroundColor: "#F4F6F8",
  //         },
  //       },
  //       head: {
  //         background: "#F4F6F8",
  //       },
  //     },
  //   },
  //   MuiTableCell: {
  //     styleOverrides: {
  //       head: {
  //         color: "#637381",
  //         fontSize: 14,
  //         fontWeight: 600,
  //       },
  //       body: {
  //         fontSize: 14,
  //         fontWeight: 400,
  //         borderBottom: "1px dashed rgba(145, 158, 171, 0.20)",
  //       },
  //     },
  //   },
  //   MuiTableSortLabel: {
  //     styleOverrides: {
  //       root: {
  //         "&.Mui-active": {
  //           color: "#637381",
  //         },
  //       },
  //     },
  //   },
  // },
});

// // dark theme
// export const darkTheme = {
//   palette: colorsDark,
//   typography: {
//     fontFamily: "Public Sans",
//     h1: {
//       fontWeight: 800,
//       fontSize: 64,
//       lineHeight: 2,
//       boxShadow: 1,
//     },
//     h2: {
//       fontWeight: 800,
//       fontSize: 48,
//       lineHeight: 2,
//     },
//     h3: {
//       fontWeight: 700,
//       fontSize: 32,
//       lineHeight: 2,
//     },
//     h4: {
//       fontWeight: 700,
//       fontSize: 24,
//       lineHeight: 2,
//     },
//     h5: {
//       fontWeight: 700,
//       fontSize: 20,
//       lineHeight: 2,
//     },
//     h6: {
//       fontWeight: 700,
//       fontSize: 18,
//       lineHeight: 2,
//     },
//     subtitle1: {
//       fontSize: 16,
//       fontWeight: 600,
//       lineHeight: 2,
//     },
//     subtitle2: {
//       fontSize: 14,
//       fontWeight: 600,
//       lineHeight: 2,
//     },
//     body1: {
//       fontSize: 16,
//       fontWeight: 400,
//       lineHeight: 2,
//     },
//     body2: {
//       fontSize: 14,
//       fontWeight: 400,
//       lineHeight: 2,
//     },
//     caption: {
//       fontSize: 12,
//       fontWeight: 400,
//       lineHeight: 2,
//       display: "block",
//     },
//     overline: {
//       fontSize: 12,
//       fontWeight: 700,
//       lineHeight: 2,
//     },
//   },
//   shadows: "none",
//   components: {
//     MuiAccordion: {
//       styleOverrides: {
//         root: {
//           boxShadow: "none",
//           borderRadius: 8,
//           borderTopLeftRadius: 8,
//           borderTopRightRadius: 8,
//           // "&.Mui-expanded": {
//           //   boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
//           // },
//         },
//         // expanded: {
//         //   backgroundColor: "black",
//         // },
//       },
//     },
//     MuiAlert: {
//       styleOverrides: {
//         root: {
//           color: "#fff",
//           fontSize: 14,
//           fontWeight: 400,
//           alignItems: "center",
//           borderRadius: 8,
//         },
//         filledWarning: {
//           color: "black",
//         },
//         standardInfo: {
//           backgroundColor: "#003768",
//           color: "#CAFDF5",
//         },
//         standardSuccess: {
//           backgroundColor: "#065E49",
//           color: "#D3FCD2",
//         },
//         standardWarning: {
//           backgroundColor: "#7A4100",
//           color: "#FFF5CC",
//         },
//         standardError: {
//           backgroundColor: "#7A0916",
//           color: "#FFE9D5",
//         },
//         filledInfo: {
//           background: "#00B8D9",
//         },
//         filledSuccess: {
//           background: "#22C55E",
//         },
//         filledWarning: {
//           background: "#FFAB00",
//         },
//         filledError: {
//           background: "#FF5630",
//         },
//         outlinedInfo: {
//           color: "#61F3F3",
//           border: "1px solid rgba(0, 184, 217, 0.16)",
//           background: "rgba(0, 184, 217, 0.08)",
//         },
//         outlinedSuccess: {
//           color: "#77ED8B",
//           border: "1px solid rgba(34, 197, 94, 0.16)",
//           background: "rgba(34, 197, 94, 0.08)",
//         },
//         outlinedWarning: {
//           color: "#FFD666",
//           border: "1px solid rgba(255, 171, 0, 0.16)",
//           background: "rgba(255, 171, 0, 0.08)",
//         },
//         outlinedError: {
//           color: "#FFAC82",
//           border: "1px solid rgba(255, 86, 48, 0.16)",
//           background: "rgba(255, 86, 48, 0.08)",
//         },
//       },
//     },
//     MuiAccordionSummary: {
//       styleOverrides: {
//         root: {
//           padding: "0 8px 0 16px",
//         },
//       },
//     },
//     MuiAccordionDetails: {
//       styleOverrides: {
//         root: { padding: "8px 16px 16px" },
//       },
//     },
//     MuiAvatar: {
//       styleOverrides: {
//         colorDefault: {
//           fontSize: 12,
//           fontWeight: 500,
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: "capitalize",
//           borderRadius: 8,
//           paddingLeft: 16,
//           paddingRight: 16,
//           fontSize: 15,
//           height: 48,
//         },
//         containedInherit: {
//           backgroundColor: "#212B36",
//           color: "white",
//           "&:hover": {
//             backgroundColor: "#080b0d",
//           },
//         },
//         containedInfo: {
//           color: "white",
//         },
//         containedSuccess: {
//           color: "white",
//         },
//       },
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         disableRipple: true,
//       },
//     },
//     MuiBreadcrumbs: {
//       styleOverrides: {
//         separator: {
//           marginLeft: 16,
//           marginRight: 16,
//           color: "#637381",
//         },
//       },
//     },
//     MuiButtonGroup: {
//       styleOverrides: {
//         groupedContainedSecondary: {
//           backgroundColor: "#212B36",
//           borderRightColor: "#919EAB52",
//           textTransform: "capitalize",
//           fontSize: 14,
//           "&:hover": {
//             backgroundColor: "#007867",
//           },
//         },
//         groupedContainedPrimary: {
//           textTransform: "capitalize",
//         },
//         groupedOutlinedSecondary: {
//           textTransform: "capitalize",
//           borderColor: "#919EAB52",
//           color: "#fff",
//         },
//         groupedOutlinedPrimary: {
//           textTransform: "capitalize",
//           fontSize: 14,
//         },
//         groupedTextSecondary: {
//           textTransform: "capitalize",
//           borderColor: "#919EAB52",
//           color: "#fff",
//         },
//         groupedTextPrimary: {
//           textTransform: "capitalize",
//           fontSize: 14,
//         },
//         groupedContainedInfo: {
//           backgroundColor: "#00A76F14",
//           color: "#007867",
//           borderBottomColor: "#007867",
//           textTransform: "capitalize",
//           fontSize: 14,
//           "&:hover": {
//             backgroundColor: "#007867",
//             color: "#fff",
//           },
//         },
//       },
//     },
//     MuiDialog: {
//       styleOverrides: {
//         paper: {
//           borderRadius: 16,
//           background: "#212B36",
//         },
//       },
//     },
//     MuiDialogTitle: {
//       styleOverrides: {
//         root: {
//           padding: "24px 12px 24px 24px",
//         },
//       },
//     },
//     MuiDialogContent: {
//       styleOverrides: {
//         root: {
//           padding: "0 24px",
//         },
//       },
//     },
//     MuiDialogContentText: {
//       styleOverrides: {
//         root: {
//           lineHeight: "26px",
//         },
//       },
//     },
//     MuiDialogActions: {
//       styleOverrides: {
//         root: {
//           padding: 24,
//         },
//       },
//     },
//     MuiFab: {
//       styleOverrides: {
//         root: {
//           color: "white",
//           textTransform: "capitalize",
//         },
//       },
//     },
//     MuiToggleButtonGroup: {
//       styleOverrides: {
//         root: {
//           border: "1px solid rgba(145, 158, 171, 0.08)",
//           padding: "4px",
//           borderRadius: 8,
//         },
//       },
//     },
//     MuiToggleButton: {
//       styleOverrides: {
//         root: {
//           border: "none",
//           display: "flex",
//           alignItems: "center",
//           gap: "10px",
//         },
//       },
//     },
//     MuiMenu: {
//       styleOverrides: {
//         root: {
//           width: 460,
//           maxWidth: 460,
//         },
//       },
//     },
//     MuiMenuItem: {
//       styleOverrides: {
//         root: {
//           "&:hover": {
//             backgroundColor: "rgba(145, 158, 171, 0.08)",
//           },
//         },
//       },
//     },
//     MuiList: {
//       styleOverrides: {
//         root: {
//           width: "100%",
//           maxWidth: 500,
//           color: "white",
//         },
//       },
//     },
//     MuiListSubheader: {
//       styleOverrides: {
//         root: {
//           fontSize: 20,
//           fontWeight: 700,
//         },
//       },
//     },
//     MuiListItemText: {
//       styleOverrides: {
//         primary: {
//           lineHeight: "22px",
//         },
//         secondary: {
//           color: "#637381",
//           fontWeight: 400,
//         },
//       },
//     },
//     MuiListItemIcon: {
//       styleOverrides: {
//         root: {
//           paddingRight: 2,
//           minWidth: 40,
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           fontSize: 13,
//         },
//         deleteIcon: {
//           fontSize: 18,
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#fff0f5",
//           width: 300,
//         },
//       },
//     },
//     MuiCardMedia: {
//       styleOverrides: {
//         root: {
//           height: 345,
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           gap: 20,
//         },
//       },
//       defaultProps: {
//         useFlexGap: true,
//       },
//     },
//     MuiPaginationItem: {
//       styleOverrides: {
//         outlinedPrimary: {
//           border: "1px solid rgba(145, 158, 171, 0.32)",
//         },
//         ellipsis: {
//           border: "none",
//         },
//       },
//     },
//     MuiRating: {
//       styleOverrides: {
//         iconEmpty: { color: "#919EAB", opacity: 0.48 },
//         iconFilled: { color: "#FFAB00" },
//       },
//     },
//     MuiFormGroup: {
//       styleOverrides: {
//         root: {
//           gap: 20,
//         },
//       },
//     },
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           backgroundColor: "#212B36",
//           borderRadius: 6,
//           fontSize: "12px",
//           fontWeight: 400,
//           lineHeight: "18px",
//         },
//         arrow: {
//           color: "#212B36",
//         },
//       },
//     },
//     MuiTimelineDot: {
//       styleOverrides: {
//         root: {
//           boxShadow: "none",
//         },
//       },
//     },
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           color: "#637381",
//           textTransform: "capitalize",
//           fontSize: 14,
//           fontWeight: 600,
//           minHeight: "auto",
//           textAlign: "left",
//         },
//       },
//     },
//     MuiTabs: {
//       styleOverrides: {
//         root: {
//           marginBottom: 40,
//         },
//         indicator: {
//           backgroundColor: "#fff",
//         },
//         scroller: {
//           background: "#212B36",
//         },
//       },
//     },
//     MuiDateCalendar: {
//       styleOverrides: {
//         root: {
//           height: "auto",
//         },
//       },
//     },
//     MuiPickersToolbarButton: {
//       styleOverrides: {
//         root: {
//           height: "auto",
//         },
//       },
//     },
//     MuiDateTimePickerTabs: {
//       styleOverrides: {
//         root: {
//           marginBottom: "0px",
//         },
//       },
//     },
//     MuiStepLabel: {
//       styleOverrides: {
//         labelContainer: {
//           color: "#919EAB",
//         },
//       },
//     },
//     MuiStepper: {
//       styleOverrides: {
//         root: {
//           paddingTop: 20,
//         },
//       },
//     },
//     MuiPopover: {
//       styleOverrides: {
//         paper: {
//           backgroundImage: "linear-gradient(to left, #00B8D91F, #FF56301F)",
//         },
//       },
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           display: "flex",
//           gap: 4,
//         },
//       },
//     },
//     MuiSnackbarContent: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
//           background: "#FFFFFF",
//           color: "#212B36",
//           padding: "8px 16px 8px 8px",
//           fontSize: 14,
//         },
//         message: {
//           padding: 0,
//         },
//       },
//     },
//     MuiFormLabel: {
//       styleOverrides: {
//         root: {
//           color: "#919EAB",
//           "&.MuiInputLabel.Mui-focused": {
//             color: "red",
//           },
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           "&.Mui-focused": {
//             color: "#212B36",
//           },
//           "&.Mui-error": {
//             color: "#FF5630",
//           },
//         },
//       },
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           "&.MuiInputBase-colorPrimary::after": {
//             borderBottom: "2px solid #212B36",
//           },
//         },
//       },
//     },
//     MuiFilledInput: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           "&.MuiFilledInput-root": {
//             backgroundColor: "rgba(145, 158, 171, 0.08)",
//           },
//           "&.MuiFilledInput-root.Mui-focused": {
//             backgroundColor: "#919EAB29",
//           },
//           "&.MuiFilledInput-root::before": {
//             borderBottom: "none",
//           },
//           "&.MuiFilledInput-root::after": {
//             borderBottom: "none",
//           },
//           "&.MuiFilledInput-root.Mui-error": {
//             background: "#FF563014",
//           },
//           "&.MuiFilledInput-root.Mui-disabled": {
//             border: "1px dashed rgba(145, 158, 171, 0.20)",
//             backgroundColor: "rgba(145, 158, 171, 0.08)",
//           },
//           "&.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before ":
//             {
//               borderBottom: "none",
//             },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderColor: "#212B36",
//           },
//           "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
//             border: "1px dashed rgba(145, 158, 171, 0.20)",
//           },
//         },
//         notchedOutline: {
//           borderColor: "rgba(145, 158, 171, 0.20)",
//         },
//       },
//     },
//     MuiSlider: {
//       styleOverrides: {
//         root: {
//           "&.Mui-disabled .MuiSlider-track": {
//             backgroundColor: "#919EABCC",
//             borderColor: "#c4cdd5",
//           },
//         },
//         valueLabel: {
//           background: "#212B36",
//           borderRadius: 4,
//           padding: "3px 6px",
//           fontSize: 12,
//         },
//       },
//     },
//     MuiSwitch: {
//       styleOverrides: {
//         root: {
//           "& .MuiSwitch-switchBase.Mui-checked ": {
//             left: "-1px",
//           },
//         },
//         thumb: {
//           width: 14,
//           height: 14,
//           boxShadow: "none",
//         },
//         switchBase: {
//           top: 6,
//           left: 6,
//         },
//         track: {
//           width: 33,
//           height: 20,
//           borderRadius: 25,
//           background: "rgba(145, 158, 171, 0.48)",
//         },
//         sizeSmall: {
//           ".MuiSwitch-track": {
//             width: 25,
//             height: 16,
//           },
//           ".MuiSwitch-thumb": {
//             width: 10,
//             height: 10,
//           },
//         },
//       },
//     },
//   },
// };
