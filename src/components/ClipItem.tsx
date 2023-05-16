import { Box } from "./atoms";
import { Text } from "react-native";
import TouchableOpacity from "./TouchableOpacity";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import Icon from "./Icon";
import { useColorMode } from "../state";

export default function ClipItem() {
  const theme = useTheme<Theme>();
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100%"
      padding="m"
      borderRadius="sm"
      flexDirection="row"
      backgroundColor={colorMode === "Dark" ? "$black" : "$white"}
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
      <Text
        style={{
          fontFamily: "Nunito_700Bold",
          fontSize: 15,
          color:
            colorMode === "Dark" ? theme.colors.$white : theme.colors.$black,
        }}
      >
        ClipItem
      </Text>
      <Box flexDirection="row" gap="m">
        <TouchableOpacity
          padding="m"
          borderRadius="sm"
          backgroundColor={colorMode === "Dark" ? "$blackMuted" : "$whiteMuted"}
          onPress={() => {}}
        >
          <Icon name="copy" color="$primary" size={13} />
        </TouchableOpacity>
        <TouchableOpacity
          padding="m"
          borderRadius="sm"
          backgroundColor="$danger"
          onPress={() => {}}
        >
          <Icon name="trash" color="$white" size={13} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
