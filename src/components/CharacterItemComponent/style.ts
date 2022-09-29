import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    imageContainer:{
        height: 150,
        width: 100,
        resizeMode: "cover"
    },
    text: {
        color: theme.Colors.white,
        width: 100,
        textAlign: "center",
        marginTop: 5
    }

});

export default Style