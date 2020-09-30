import React from "react";
import { View, StyleSheet } from "react-native";
import Calculator from "./topics/navigation/Calculator";
import Constants from "expo-constants";
import NumberGuessingGame from "./topics/introduction/NumberGuessingGame";
import ShoppingList from "./topics/introduction/ShoppingList";
import HistoryPage from "./topics/navigation/HistoryPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  view: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={HistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
