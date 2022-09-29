import React from "react";
import { Props } from "./types";
import { Image, Text, TouchableOpacity } from "react-native";
import Style from "./style";

export function CharacterComponent({ model, onClickCharacter }: Props) {
        return (
        <TouchableOpacity onPress={onClickCharacter}>
            <Image 
            source={{ uri: model.thumbnail.path + '/detail.' + model.thumbnail.extension}}
            style={Style.imageContainer} />
            <Text style={Style.name}>{model.name}</Text>
        </TouchableOpacity>
    )
}