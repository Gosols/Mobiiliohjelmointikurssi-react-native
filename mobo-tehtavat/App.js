import React from "react";
import { View, StyleSheet } from "react-native";
import Calculator from "./topics/introduction/Calculator";
import Constants from "expo-constants";
import NumberGuessingGame from "./topics/introduction/NumberGuessingGame";

const styles = StyleSheet.create({
  view: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function App() {
  return (
    <View style={styles.view}>
      <Calculator />
      <NumberGuessingGame />
    </View>
  );
}
