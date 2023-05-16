import React from "react";
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  layout,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import { TouchableOpacity as NativeTouchable } from "react-native";
import { Theme } from "../theme";

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  layout,
  border,
  backgroundColor,
]);

type TouchableOpacityProps = RestyleProps & {
  children: React.ReactNode;
  onPress?: () => void;
  activeOpacity?: number;
};

export default function TouchableOpacity({
  children,
  onPress,
  activeOpacity,
  ...rest
}: TouchableOpacityProps) {
  const props = useRestyle(restyleFunctions, rest);
  return (
    <NativeTouchable activeOpacity={activeOpacity} onPress={onPress} {...props}>
      {children}
    </NativeTouchable>
  );
}
