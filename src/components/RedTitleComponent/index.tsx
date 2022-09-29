import React from "react";
import { Props } from "./types";
import { Text} from "react-native";
import Style from "./style";

export function RedTitleComponent({ text, containerStyle}: Props) {

    return (
        <Text style={[Style.text, containerStyle]}>
            {text}
        </Text>
    )
}