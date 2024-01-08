import { paramCase, snakeCase } from "../utils/change-case";

// ----------------------------------------------------------------------

const getHref = (category, name) => `/${category}/${paramCase(name)}`;

export const foundationNav = ["Colors", "Typography", "Grid"].map((name) => ({
  name,
  href: getHref("foundation", name),
  icon: `/assets/components/ic_${snakeCase(name)}.svg`,
}));

export const muiNav = [
  "Accordion",
  "Alert",
  "Avatar",
  "Badge",
  "Breadcrumbs",
  "Buttons",
  "Checkbox",
  "Chip",
  "Dialog",
  "List",
  "Menu",
  "Pagination",
  "Pickers",
  "Popover",
  "Progress",
  "Radio Button",
  "Rating",
  "Slider",
  "Stepper",
  "Switch",
  "Table",
  "Tabs",
  "Textfield",
  "Timeline",
  "Tooltip",
  "Data Grid",
].map((name) => ({
  name,
  href: getHref("mui", name),
  icon: `/assets/components/ic_${snakeCase(name)}.svg`,
}));

export const extraNav = ["Upload", "Carousel", "Snackbar"].map((name) => ({
  name,
  href: getHref("extra", name),
  icon: `../../public/assets/components/ic_extra_${snakeCase(name)}.svg`,
}));
