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
  const [result, setResult] = React.useState();
  let [history, setHistory] = React.useState([]);

  const addition = () => {
    setResult(parseInt(first) + parseInt(second));
    history.push(
      `${first} + ${second} = ${parseInt(first) + parseInt(second)}`
    );
  };

  const subtraction = () => {
    setResult(parseInt(first) - parseInt(second));
    history.push(
      `${first} - ${second} = ${parseInt(first) - parseInt(second)}`
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Calculator</Text>
      <View style={styles.component}>
        <Text>Result: {result}</Text>
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
            onPress={addition}
          />
          <Button
            color="black"
            style={styles.button}
            title="Minus"
            onPress={subtraction}
          />
        </View>
        <View>
          <Text>History</Text>
          {history.map((item, i) => {
            return <Text key={i}>{item}</Text>;
          })}
        </View>
      </View>
    </View>
  );
}
