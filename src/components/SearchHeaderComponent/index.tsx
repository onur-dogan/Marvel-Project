import React, { useState } from "react";
import { Props } from "./types";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./style";


export function SearchHeaderComponent({ searchFunction }: Props) {

    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    const cancelClickFunction = () => {
        setIsSearch(isSearch => !isSearch)
        search.trim() && searchFunction('')
        setSearch('')
    }

    const _searchFunction = () => {
        //if search has any letter or number. Not accept the spaces.
        search.trim() && searchFunction(search)
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
                    onPress={() => { _searchFunction() }}>
                    <Text style={Style.text}>Ara</Text>
                </TouchableOpacity>
            </View>

    )
}