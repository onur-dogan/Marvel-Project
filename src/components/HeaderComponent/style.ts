import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
    icon: {
        color: theme.Colors.white,
        fontSize: 20,
    },
    container: {
        position:"absolute", 
        zIndex:1,
        backgroundColor:theme.Colors.black,
    }
});

export default Style