import React from "react";
import { Box } from "../components/atoms";
import { Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { MainStackNavigatorList } from "../utils/types";
import ClipItem from "../components/ClipItem";
import { Icon, TouchableOpacity } from "../components";
import { useColorMode } from "../state";
import db from "../utils/db";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";

type HomeNavigatorProps = NavigationProp<MainStackNavigatorList, "Home">;

type Props = {
  navigation: HomeNavigatorProps;
};

export default function Home({ navigation }: Props) {
  const theme = useTheme<Theme>();
  const { colorMode } = useColorMode();

  return (
    <Box
      flex={1}
      width="100%"
      backgroundColor={colorMode === "Dark" ? "$backgroundDark" : "$background"}
      alignContent="center"
    >
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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Nunito_700Bold",
            color:
              colorMode === "Dark" ? theme.colors.$white : theme.colors.$black,
          }}
        >
          My Clips
        </Text>
        <Box flexDirection="row" gap="m">
          <TouchableOpacity
            padding="m"
            borderRadius="sm"
            backgroundColor={colorMode === "Dark" ? "$blackMuted" : "$white"}
            onPress={() => navigation.navigate("Settings")}
          >
            <Icon name="settings" color="$primary" size={15} />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box
        flexGrow={1}
        backgroundColor={
          colorMode === "Dark" ? "$backgroundDark" : "$background"
        }
        padding="m"
      >
        <ClipItem />
      </Box>
    </Box>
  );
}
