import { Image, Modal, Pressable, Text, View } from "react-native";
import { connect } from "react-redux";
import store from "../../store/store";
import Style from "./style";
import { ModalSwitcher } from "../../utils/modal-switcher";
import { useEffect, useState } from "react";
import { APIService } from "../../API/api-service";
import theme from "../../constant/theme";

export function DetailModalComponent(props: any) {
    console.log(props, props.isDetailModal)
    const [filmData, setFilmData] = useState({ path: undefined, extension: undefined } as { path?: string, extension?: string })

    const getData = () => {
        APIService.getFilmDetail(props.detailModalData.detailModalData.resourceURI)
            .then((res) => {
                setFilmData(res)
            })
    }

    useEffect(() => {
        props.isDetailModal.isDetailModal && getData()
    }, [])

    return (
        props.isDetailModal.isDetailModal &&
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isDetailModal.isDetailModal}
        >
            <View style={Style.centeredView}>
                <View style={Style.modalView}>
                    <Pressable
                        style={[Style.button, Style.buttonClose]}
                        onPress={() => ModalSwitcher.hideDetailModal()}
                    >
                        <Text style={Style.textStyle}>X</Text>
                    </Pressable>
                    <Image
                        source={{
                            uri: filmData ?
                                filmData.path + '/detail.' + filmData.extension
                                : theme.Images.unknown_png
                        }}
                        style={Style.imageContainer} />
                <Text style={Style.deepTextStyle}>{props.detailModalData.detailModalData.name}</Text>
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