import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { appNavigationParamList } from "./AppNavigationParamList";
import { Provider as AntDesignProvider } from '@ant-design/react-native'
import { Provider } from 'react-redux'
import { Loading } from "../components/LoadingComponent";
import store from "../store/store";
import { DetailModal } from "../components/DetailModalComponent";

export function Content() {
  const Stack = createNativeStackNavigator<appNavigationParamList>();

  return (
    <Provider store={store}>
      <AntDesignProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Loading />
        <DetailModal />
      </AntDesignProvider>
    </Provider>
  )
}