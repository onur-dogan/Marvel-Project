import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    deepTextStyle: {
        color: theme.Colors.white,
        marginTop: 20,
        fontSize: 15,
        flex: 1
    },
    deepCounterStyle: {
        color: theme.Colors.gray,
        fontSize: 13,
        bottom: 20,
        flex: 1
    },
    imageContainer: {
        height: "80%",
        width: "100%",
        marginTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    modalView: {
        margin: 100,
        backgroundColor: theme.Colors.darkBlue,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    textStyle: {
        color: theme.Colors.white,
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default Style