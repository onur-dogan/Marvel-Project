import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { appNavigationParamList } from "./AppNavigationParamList";

export function Content() {
  const Stack = createNativeStackNavigator<appNavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{header: () => <HeaderComponent/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}