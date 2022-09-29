import { Props } from "./types";
import { useEffect, useState } from 'react'
import { APIService } from "../../API/api-service";
import { CharacterModel } from "../../API/models/character-model";
import { FlatList } from "react-native";
import { CharacterComponent } from "../../components/CharacterComponent";
import { ModalSwitcher } from "../../utils/modal-switcher";
import { SearchHeaderComponent } from "../../components/SearchHeaderComponent";

export function HomeScreen({ navigation }: Props) {

    const [data, setData] = useState([] as CharacterModel[])
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        getData()
    }, [limit])

    const getData = (data?: string) => {
        APIService.getCharacters(limit, data)
            .then(res => {
                setData(res)
            })
    }

    const callSearchFunction = (data: string) => {
        getData(data)
        setLimit(5)
    }

    const _renderItem = (category: { index: number, item: CharacterModel }) => {
        return (
            <CharacterComponent
                model={category.item}
                onClickCharacter={() => navigation.navigate('Detail', { data: category.item })} />
        )
    }

    return (
        <>
            <SearchHeaderComponent searchFunction={callSearchFunction}/>
            <FlatList
                data={data}
                renderItem={_renderItem}
                keyExtractor={item => item.id.toString()}
                onScrollEndDrag={() => setLimit((limit) => limit + 5)}
            /></>
    )
}