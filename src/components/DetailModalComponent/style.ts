import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: theme.Colors.darkBlue,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "100%",
        width: "100%"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
        backgroundColor: theme.Colors.white,
    },
    buttonClose: {
        backgroundColor: theme.Colors.darkBlue,
    },
    textStyle: {
        color: theme.Colors.white,
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    imageContainer:{
        height: "80%",
        width: "80%",
        resizeMode: "cover"
    },
});

export default Style