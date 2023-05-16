import React from "react";
import { Box } from "./atoms";
import TouchableOpacity from "../components/TouchableOpacity";
import { useColorMode } from "../state";

export type SwitchRef = {
  active: () => boolean;
  setActive: (state: boolean) => void;
};

type SwitchProps = {
  onPress?: () => void;
};

export const Switch = React.forwardRef<SwitchRef, SwitchProps>(
  ({ onPress }, ref) => {
    const { colorMode } = useColorMode();
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const active = React.useCallback(() => {
      return isActive;
    }, []);

    const setActive = React.useCallback((state: boolean) => {
      setIsActive(state);
    }, []);

    React.useImperativeHandle(ref, () => ({ active, setActive }));

    return (
      <TouchableOpacity
        onPress={onPress}
        width="15%"
        borderRadius="hg"
        backgroundColor={colorMode === "Dark" ? "$blackMuted" : "$white"}
        height={30}
        activeOpacity={0.8}
      >
        <Box
          position="relative"
          backgroundColor={colorMode === "Dark" ? "$black" : "$background"}
          borderRadius="hg"
          left={isActive === true ? "50%" : "0%"}
          width="60%"
          height={30}
        />
      </TouchableOpacity>
    );
  }
);
