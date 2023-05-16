import {
  BackgroundColorProps,
  VariantProps,
  backgroundColor,
  composeRestyleFunctions,
  useTheme,
} from "@shopify/restyle";
import { Theme } from "../theme";
import { StatusBar as NativeStatusBar } from "expo-status-bar";
import { useColorMode } from "../state";

export default function StatusBar() {
  const theme = useTheme<Theme>();
  const { colorMode } = useColorMode();

  return (
    <NativeStatusBar
      animated={true}
      backgroundColor={
        colorMode === "Dark" ? theme.colors.$black : theme.colors.$whiteMuted
      }
      style={theme.statusBar?.barStyle}
    />
  );
}
