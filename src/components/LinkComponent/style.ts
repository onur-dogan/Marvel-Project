import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    text: {
        color: theme.Colors.white,
        fontSize: 16
    },
    icon: {
        color: theme.Colors.white,
        fontSize: 20
    },
    view: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    }
});

export default Style