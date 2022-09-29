import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { appNavigationParamList } from "./AppNavigationParamList";
import { Provider } from '@ant-design/react-native'

export function Content() {
  const Stack = createNativeStackNavigator<appNavigationParamList>();

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Index" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}