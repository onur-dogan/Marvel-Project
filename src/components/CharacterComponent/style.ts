import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    imageContainer:{
        width: "100%",
        height: 175,
        resizeMode: "cover"
    },
    name:{
        position:'absolute',
        backgroundColor:theme.Colors.white,
        bottom: "20%",
        left: "10%",
        padding: 10,
        fontWeight:"bold",
        color: theme.Colors.black
    }
});

export default Style