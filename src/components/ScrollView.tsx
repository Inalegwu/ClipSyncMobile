import React from "react";
import { ScrollView as NativeScrollView } from "react-native";
import { BoxProps } from "./atoms";
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
import { Theme } from "../theme";
import { ScrollViewProps as NativeScrollViewProps } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme>;

const restyleFunction = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
]);

type ScrollViewProps = RestyleProps & {
  children: React.ReactNode;
};

const ScrollView = ({ children, ...rest }: ScrollViewProps) => {
  const props = useRestyle(restyleFunction, rest);

  return (
    <NativeScrollView
      {...props}
      scrollEventThrottle={16}
      contentContainerStyle={{ gap: 10, paddingBottom: 30 }}
    >
      {children}
    </NativeScrollView>
  );
};

export default ScrollView;
