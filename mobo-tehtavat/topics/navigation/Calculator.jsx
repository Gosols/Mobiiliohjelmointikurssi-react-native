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

export default function Calculator({ navigation }) {
  const [first, setFirst] = React.useState();
  const [second, setSecond] = React.useState();
  const [result, setResult] = React.useState();
  const [history, setHistory] = React.useState([]);

  const addition = () => {
    const sum = parseInt(first) + parseInt(second);

    setResult(sum);
    history.push(`${first} + ${second} = ${sum}`);
  };

  const subtraction = () => {
    const sub = parseInt(first) - parseInt(second);

    setResult(sub);
    history.push(`${first} - ${second} = ${sub}`);
  };

  return (
    <View style={{ alignItems: "center" }}>
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
          <Button color="black" title="Plus" onPress={addition} />
          <Button color="black" title="Minus" onPress={subtraction} />
        </View>
        <Button
          title="History"
          onPress={() => {
            navigation.navigate("History", { history: history });
          }}
        />
      </View>
    </View>
  );
}
