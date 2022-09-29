import React from "react";
import { Props } from "./types";
import { Text, View, TouchableOpacity } from "react-native";
import Style from "./style";

export function LinkComponent({ text, containerStyle }: Props) {
    // todo void

    return (
        <TouchableOpacity style={[Style.view, containerStyle]}>
            <Text style={Style.text}>{text}</Text>
            <Text style={Style.icon}>{'>'}</Text>
        </TouchableOpacity>
    )
}