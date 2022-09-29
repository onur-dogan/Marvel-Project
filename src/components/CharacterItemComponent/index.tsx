import React, { useEffect, useState } from "react";
import { Props } from "./types";
import { Image, Text, TouchableOpacity } from "react-native";
import Style from "./style";
import { APIService } from "../../API/api-service";
import theme from "../../constant/theme";

export function CharacterItemComponent({ data }: Props) {

    const [filmData, setFilmData] = useState({path: undefined, extension: undefined} as { path?: string, extension?: string })

    const getData = () => {
        APIService.getFilmDetail(data.resourceURI)
            .then((res) => {
                console.log(res)
                setFilmData(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <TouchableOpacity>
            <Image
                source={{
                    uri: filmData ?
                        filmData.path + '/detail.' + filmData.extension
                        : theme.Images.unknown_png
                }}
                style={Style.imageContainer} />
            <Text style={Style.text}>{data.name}</Text>
        </TouchableOpacity>
    )
}