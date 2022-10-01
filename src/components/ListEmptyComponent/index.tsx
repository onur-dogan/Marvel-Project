import React from "react";
import { Props } from "./types";
import { Text } from "react-native";
import Style from "./style";

export function ListEmptyComponent({ text = 'Loading...' }: Props) {

    return (
        <Text style={Style.text}>{text}</Text>
    )
}