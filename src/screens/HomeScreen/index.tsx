import { Props } from "./types";
import { useEffect, useState } from 'react'
import { APIService } from "../../API/api-service";
import { CharacterModel } from "../../API/models/character-model";
import { FlatList } from "react-native";
import { CharacterComponent } from "../../components/CharacterComponent";

export function HomeScreen({ navigation }: Props) {

    const [data, setData] = useState([] as CharacterModel[])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        APIService.getCharacters()
            .then(res => {
                setData(res)
            })
    }

    const _renderItem = (category: { index: number, item: CharacterModel }) => {
        return (
            <CharacterComponent
                model={category.item}
                onClickCharacter={() => navigation.navigate('Detail', { data: category.item })} />
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}