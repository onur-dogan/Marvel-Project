import React, { useEffect, useState } from "react";
import { Props } from "./types";
import { Image, Text, TouchableOpacity } from "react-native";
import Style from "./style";
import { APIService } from "../../API/api-service";
import theme from "../../constant/theme";
import { ModalSwitcher } from "../../utils/modal-switcher";

export function CharacterItemComponent({ data, allData }: Props) {

    const [filmData, setFilmData] = useState({ path: undefined, extension: undefined } as { path?: string, extension?: string })

    async function getData() {
        APIService.getFilmDetail(data.resourceURI)
            .then((res) => {
                setFilmData(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(filmData)

    return (
        <TouchableOpacity onPress={() => { ModalSwitcher.showDetailModal(allData) }}>
            <Image
                source={{
                    uri: filmData && filmData.path ?
                        filmData.path + '/detail.' + filmData.extension
                        : theme.Images.unknown_png
                }}
                style={Style.imageContainer} />
            <Text style={Style.text}>{data.name}</Text>
        </TouchableOpacity>
    )
}