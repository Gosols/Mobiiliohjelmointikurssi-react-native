import React from "react";
import { TextInput, View, Button, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  component: {
    alignItems: "center",
    borderWidth: 1,
    padding: 30,
    borderRadius: 10,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 130,
    borderColor: "black",
    marginBottom: 5,
  },
  button: {
    width: 20,
  },
});

export default function Calculator() {
  const [first, setFirst] = React.useState();
  const [second, setSecond] = React.useState();
  const [operation, setOperation] = React.useState(true);

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Calculator</Text>
      <View style={styles.component}>
        <Text>
          Result:{" "}
          {operation
            ? parseInt(first) + parseInt(second)
            : parseInt(first) - parseInt(second)}
        </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="type a number"
          value={first}
          onChangeText={(n) => setFirst(n)}
          textAlign="center"
        />
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="type a number"
          value={second}
          onChangeText={(n) => setSecond(n)}
          textAlign="center"
        />
        <View style={styles.buttons}>
          <Button
            color="black"
            style={styles.button}
            title="Plus"
            onPress={() => {
              setOperation(true);
            }}
          />
          <Button
            color="black"
            style={styles.button}
            title="Minus"
            onPress={() => {
              setOperation(false);
            }}
          />
        </View>
      </View>
    </View>
  );
}
