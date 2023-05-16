import { createBox } from "@shopify/restyle";
import { Theme } from "../../theme";

const Box = createBox<Theme>();

export type BoxProps = typeof Box;
export default Box;
