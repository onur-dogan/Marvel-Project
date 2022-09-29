import React, { useState } from "react";
import { Props } from "./types";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./style";


export function SearchHeaderComponent({ searchFunction }: Props) {

    const [search, setSearch] = useState('')

    return (
        <View style={{ flexDirection: "row", padding: 5, justifyContent: "space-between" }}>
            <TextInput
                style={Style.input}
                onChangeText={(value) => setSearch(value)}
                value={search}
            />
            <TouchableOpacity
                style={{ alignItems: "center", width: '10%', justifyContent: "center" }}
                onPress={() => searchFunction(search)}>
                <Text>Ara</Text>
            </TouchableOpacity>
        </View>
    )
}