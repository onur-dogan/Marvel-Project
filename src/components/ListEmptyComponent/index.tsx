import React from "react";
import { Props } from "./types";
import { Text } from "react-native";

export function ListEmptyComponent({ text = 'Yükleniyor.' }: Props) {

    return (
        <Text>{text}</Text>
    )
}