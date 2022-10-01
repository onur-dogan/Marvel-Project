import { StyleSheet } from "react-native";
import theme from "../../constant/theme";

const Style = StyleSheet.create({
  input: {
    height: 30,
    margin:5,
    paddingVertical: 5,
    borderWidth: 1,
    backgroundColor:theme.Colors.white,
    borderRadius:10,
    flex: 1
  },
  view: {
    flexDirection: "row", 
    padding: 5, 
    justifyContent: "space-between",
    backgroundColor: theme.Colors.black
  },
  firstView:{
    flexDirection: "row", 
    justifyContent: "space-between",
    height: 50,
    padding: 10,
    backgroundColor: theme.Colors.black,
    borderWidth: 1,
    alignItems: "center", 
  },
  click:{
    alignItems: "center", 
    justifyContent: "center",
    width: '10%', 
  },
  cancelClick:{
    alignItems: "center", 
    justifyContent: "center",
    marginLeft:2
  },
  text:{
    color: theme.Colors.red,
    fontSize:15
  },
  mainText: {
    color: theme.Colors.white,
    textAlign:"center",
    backgroundColor:theme.Colors.red,
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal: 2
  }
});

export default Style