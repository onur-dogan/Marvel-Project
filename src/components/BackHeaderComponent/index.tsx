import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Style from "./style";
import { useNavigation } from "@react-navigation/native";

export function BackHeaderComponent() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={Style.container}>
            <Text style={Style.icon}>{'<'}</Text>
        </TouchableOpacity>
    )
}