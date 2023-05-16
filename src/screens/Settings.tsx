import { Text } from "react-native";
import React from "react";
import { Box } from "../components/atoms";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme, theme } from "../theme";
import { NavigationProp } from "@react-navigation/native";
import { MainStackNavigatorList } from "../utils/types";
import { Icon, Switch, TouchableOpacity } from "../components";
import { SwitchRef } from "../components/Switch";
import { useColorMode } from "../state";

type SettingsNavigator = NavigationProp<MainStackNavigatorList, "Settings">;

type Props = {
  navigation: SettingsNavigator;
};

export default function Settings({ navigation }: Props) {
  const { colorMode, setColorMode } = useColorMode();
  const DarkModeSwitchRef = React.useRef<SwitchRef>(null);

  function ActivateDarkMode() {
    if (colorMode === "Light") {
      DarkModeSwitchRef.current?.setActive(false);
      setColorMode("Dark");
    } else {
      DarkModeSwitchRef.current?.setActive(true);
      setColorMode("Light");
    }
  }

  return (
    <Box width="100%" flex={1} backgroundColor="$background">
      {/* top navigation */}
      <Box
        width="100%"
        height={80}
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
        paddingRight="lg"
        paddingLeft="lg"
      >
        <TouchableOpacity
          padding="m"
          backgroundColor={colorMode === "Dark" ? "$backgroundDark" : "$white"}
          borderRadius="sm"
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" color="$primary" size={17} />
        </TouchableOpacity>
        <TouchableOpacity
          padding="m"
          backgroundColor={colorMode === "Dark" ? "$backgroundDark" : "$white"}
          borderRadius="sm"
          onPress={() => navigation.navigate("About")}
        >
          <Icon name="info" size={17} color="$primary" />
        </TouchableOpacity>
      </Box>
      <Box
        flexGrow={1}
        padding="lg"
        alignContent="center"
        alignItems="center"
        justifyContent="flex-start"
        gap="lg"
        backgroundColor={
          colorMode === "Dark" ? "$backgroundDark" : "$background"
        }
      >
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
          padding="m"
          borderRadius="sm"
          flexDirection="row"
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
        >
          <Text
            style={{
              fontFamily: "Nunito_700Bold",
              fontSize: 15,
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Dark Mode
          </Text>
          <Switch ref={DarkModeSwitchRef} onPress={ActivateDarkMode} />
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
          padding="m"
          borderRadius="sm"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            style={{
              fontFamily: "Nunito_700Bold",
              fontSize: 15,
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Syncing
          </Text>
        </Box>
        <Box
          width="100%"
          padding="m"
          borderRadius="sm"
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
        >
          <Text
            style={{
              fontFamily: "Nunito_700Bold",
              fontSize: 15,
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Clips
          </Text>
        </Box>
        <Box
          width="100%"
          height={150}
          backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
          flexDirection="column"
          padding="m"
          borderRadius="sm"
          gap="m"
        >
          <Box flexDirection="row" gap="sm">
            <Text
              style={{
                fontFamily: "Nunito_700Bold",
                fontSize: 16,
                color:
                  colorMode === "Dark"
                    ? theme.colors.$white
                    : theme.colors.$black,
              }}
            >
              Application ID
            </Text>
            <Text
              style={{
                fontFamily: "Nunito_300Light",
                fontSize: 12,
                width: "50%",
                color:
                  colorMode === "Dark"
                    ? theme.colors.$white
                    : theme.colors.$black,
              }}
            >
              -If Your just signing into the App, Please Enter your App ID Below
            </Text>
          </Box>
          <Box
            width="100%"
            padding="m"
            backgroundColor={
              colorMode === "Dark" ? "$blackMuted" : "$background"
            }
            flexGrow={1}
            borderRadius="sm"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
