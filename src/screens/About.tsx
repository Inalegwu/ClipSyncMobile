import { Text } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { MainStackNavigatorList } from "../utils/types";
import { Box } from "../components/atoms";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import ScrollView from "../components/ScrollView";
import { Icon, TouchableOpacity } from "../components";
import { useColorMode } from "../state";

type AboutNavigator = NavigationProp<MainStackNavigatorList, "About">;

type Props = {
  navigation: AboutNavigator;
};

export default function About({ navigation }: Props) {
  const theme = useTheme<Theme>();
  const { colorMode } = useColorMode();
  return (
    <Box flex={1} width="100%" backgroundColor="$background">
      <Box
        width="100%"
        height={80}
        alignContent="center"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        backgroundColor={colorMode === "Dark" ? "$black" : "$whiteMuted"}
        paddingLeft="lg"
        paddingRight="lg"
      >
        <TouchableOpacity
          padding="m"
          backgroundColor={colorMode === "Dark" ? "$blackMuted" : "$white"}
          borderRadius="sm"
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" color="$primary" size={17} />
        </TouchableOpacity>
      </Box>
      <ScrollView
        backgroundColor={
          colorMode === "Dark" ? "$backgroundDark" : "$background"
        }
        padding="lg"
        gap="xl"
        flexGrow={1}
        paddingBottom="hg"
      >
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 17,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            What Is ClipSync
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            📱💻Have you ever had to type something you saw in an article into
            your phone , maybe as a text message ? If yes then you've felt my
            pain before.Well ClipSync makes sure you don't have to type it out
            manually, just Copy it on your PC or your Phone and have it every
            where instantly...Yeah it's realtime 🤸‍♂️ as long as you want it to be
          </Text>
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Nunito_600SemiBold",
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Is ClipSync Free ?
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            🎉Yes it is and I plan on making sure it stays that way. You can
            always donate if you enjoy the software that much.
          </Text>
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Nunito_600SemiBold",
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Who is ClipSync For ?
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            🧑🏾‍👩🏼‍🧒🏽It's for everyone whose every felt the pain of manually
            typing out some information from their laptop screen into their
            phone or vice versa
          </Text>
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Nunito_600SemiBold",
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            I Don't want any Syncing . just let me see my clipboard
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            😔Theres an option for that in the settings.You can treat ClipSync
            as a standalone Clipboard manager if you like
          </Text>
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Nunito_600SemiBold",
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            Cloud Backups
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            ☁️Save your clipboard data to the cloud so you can always have them.
            And if you want to leave ClipSync behind , you can always export
            them and use them somewhere else
          </Text>
        </Box>
        <Box
          width="100%"
          backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
          padding="m"
          borderRadius="sm"
          flexDirection="column"
          gap="m"
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Nunito_600SemiBold",
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
            }}
          >
            How About Images
          </Text>
          <Text
            style={{
              color:
                colorMode === "Dark"
                  ? theme.colors.$white
                  : theme.colors.$black,
              fontSize: 15,
              fontFamily: "Nunito_500Medium",
              fontWeight: "700",
            }}
          >
            😉Images are at the top of the priority list and you can expect them
            soon
          </Text>
        </Box>
      </ScrollView>
    </Box>
  );
}
