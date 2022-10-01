import React, { useState } from "react";
import { Props } from "./types";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./style";


export function SearchHeaderComponent({ searchFunction }: Props) {

    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    const cancelClickFunction = () => {
        setIsSearch(isSearch => !isSearch)
        if(search != ''){
            setSearch('')
            searchFunction('')
        }
    }

    return (

        !isSearch ?
            <View style={Style.firstView}>
                <Text></Text>
                <Text style={Style.mainText}>MARVEL</Text>
                <TouchableOpacity
                    onPress={() => setIsSearch(isSearch => !isSearch)}>
                    <Text style={Style.text}>Ara</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={Style.view}>
                <TouchableOpacity
                    style={Style.cancelClick}
                    onPress={cancelClickFunction}>
                    <Text style={Style.text}>X</Text>
                </TouchableOpacity>
                <TextInput
                    style={Style.input}
                    onChangeText={(value) => setSearch(value)}
                    value={search}
                />
                <TouchableOpacity
                    style={Style.click}
                    onPress={() => searchFunction(search)}>
                    <Text style={Style.text}>Ara</Text>
                </TouchableOpacity>
            </View>

    )
}