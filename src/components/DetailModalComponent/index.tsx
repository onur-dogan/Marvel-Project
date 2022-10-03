import { Modal, FlatList, Pressable, Text, View } from "react-native";
import { connect } from "react-redux";
import store from "../../store/store";
import Style from "./style";
import { ModalSwitcher } from "../../utils/modal-switcher";
import { useEffect, useState } from "react";
import { APIService } from "../../API/api-service";
import { ListEmptyComponent } from "../ListEmptyComponent";
import { CharacterModalComponent } from "../CharacterModalComponent";

export function DetailModalComponent(props: any) {
    interface Iimage {
        path?: string,
        extension?: string,
        name?: string,
    }
    const [filmData, setFilmData] = useState([] as Iimage[])

    async function getData() {
        var list = [] as Iimage[]
        for (const element of props.detailModalData) {
            await APIService.getFilmDetail(element.resourceURI)
                .then((res) => {
                    list.push({ ...res, name: element.name })
                })
        }
        setFilmData(list)
    }

    const _renderFilmItem = (eachData: { item: Iimage, index: number }) => {
        return (
            <CharacterModalComponent data={eachData.item}
                index={eachData.index + 1}
                totalLength={filmData.length} />
        )
    }

    useEffect(() => {
        getData()
        return () => { 
            setFilmData([])
        }
    }, [props.detailModalData])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isDetailModal}
        >
            <View style={Style.centeredView}>
                <View style={Style.modalView}>
                    <Pressable
                        style={[Style.button, Style.buttonClose]}
                        onPress={() => ModalSwitcher.hideDetailModal()}
                    >
                        <Text style={Style.textStyle}>{"X"}</Text>
                    </Pressable>
                    <FlatList
                        data={filmData}
                        renderItem={_renderFilmItem}
                        horizontal={true}
                        ListEmptyComponent=
                        {<ListEmptyComponent text='Kartlar Yükleniyor...' />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </Modal>
    )
}

const mapStateToProps = () => {
    return {
        isDetailModal: store.getState().setDetailModalShow,
        detailModalData: store.getState().setDetailModalData
    };
};

const mapDispatchToProps = () => {
    return {}
};

export const DetailModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailModalComponent);