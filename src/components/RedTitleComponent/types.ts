import { StyleProp, TextStyle } from "react-native";

type props = {
    text : string,
    containerStyle?: StyleProp<TextStyle> | undefined;
}

export type Props = props