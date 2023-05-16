import React from "react";
import { Box } from "./atoms";
import { BoxProps } from "@shopify/restyle";
import { Theme } from "../theme";

type ContainerProps = BoxProps<Theme> & {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Box
      width="100%"
      flex={1}
      padding="m"
      backgroundColor="$background"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Container;
