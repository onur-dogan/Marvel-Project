import { RedTitleComponent } from "../RedTitleComponent";
import { Props } from "./types";
import { FlatList, View } from "react-native"
import { Iitems } from "../../API/models/common-model";
import { ListEmptyComponent } from "../ListEmptyComponent";
import { CharacterItemComponent } from "../CharacterItemComponent";

export function FilmCardWithTitleComponent({ data, text }: Props) {
    const _renderComics = (data: { item: Iitems }) => {
        return (<CharacterItemComponent data={data.item} />)
    }

    const _renderItemSeperator = () => {
        return <View style={{ marginLeft: 10 }} />
    }

    return (
        <>
            <RedTitleComponent text={text} containerStyle={{ marginTop: 10 }} />
            <FlatList
                data={data}
                renderItem={_renderComics}
                horizontal={true}
                ListEmptyComponent={<ListEmptyComponent />}
                ItemSeparatorComponent={_renderItemSeperator}
                style={{ marginTop: 10 }}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}