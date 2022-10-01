import { Text, View, Image } from "react-native";
import Style from "./style";
import theme from "../../constant/theme";
import { Props } from "./types";

export function CharacterModalComponent({ data, index, totalLength }: Props) {
    return (
        <View style={Style.centeredView}>
            <View style={Style.modalView} onStartShouldSetResponder={(): boolean => true}>
                <Image
                    source={{
                        uri: data.path ?
                            data.path + '/detail.' + data.extension
                            : theme.Images.unknown_png
                    }}
                    style={Style.imageContainer} />
                <Text style={Style.deepTextStyle}>{data.name}</Text>
                <Text style={Style.deepCounterStyle}>{`${index}/${totalLength}`}</Text>
            </View>
        </View>
    )
}
