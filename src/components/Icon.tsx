import {
  ColorProps,
  color,
  composeRestyleFunctions,
  useRestyle,
} from "@shopify/restyle";
import { Theme } from "../theme";
import { Feather } from "@expo/vector-icons";
import { IconNames } from "../utils/types";

type RestyleProps = ColorProps<Theme>;

const restyleFunction = composeRestyleFunctions<Theme, RestyleProps>([color]);

type IconProps = RestyleProps & {
  name: IconNames;
  size?: number;
};

export default function Icon({ name, size, ...rest }: IconProps) {
  const props = useRestyle(restyleFunction, rest);
  return <Feather name={name} {...props} size={size} />;
}
