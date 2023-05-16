import { createTheme } from "@shopify/restyle";
import { StatusBarStyle } from "expo-status-bar";

const palette = {
  greenPrimary: "#246a40",
  background: "#e0e0e09d",
  backgroundDark: "#151515",
  black: "#000000",
  blackMuted: "#17171786",
  white: "#ffffff",
  whiteMuted: "#f0efef",
  red: "#e83939",
};

const theme = createTheme({
  colors: {
    $background: palette.background,
    $backgroundDark: palette.backgroundDark,
    $black: palette.black,
    $blackMuted: palette.blackMuted,
    $primary: palette.greenPrimary,
    $white: palette.white,
    $whiteMuted: palette.whiteMuted,
    $danger: palette.red,
  },
  spacing: {
    xs: 4,
    sm: 8,
    m: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
  },
  borderRadii: {
    sm: 8,
    m: 16,
    lg: 24,
    xl: 40,
    hg: 128,
  },
  statusBar: {
    barStyle: "auto" as StatusBarStyle,
  },
});

export type Theme = typeof theme;
export default theme;
