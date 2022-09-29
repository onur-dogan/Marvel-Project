import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
  image:{
    height: 250,
    position:"relative",
  },
  text:{
    color:theme.Colors.white,
    marginTop: 5
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: theme.Colors.darkBlue,
    flex:1,
    paddingBottom: 10
  }
  });

  export default Style