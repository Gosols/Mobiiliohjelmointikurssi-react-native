import React from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
  },
  content: {
    width: 130,
    height: 100,
    justifyContent: "space-evenly",
  },
  view: {
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
const number = Math.floor(Math.random() * 100 + 1);
let guesses = 0;

export default function NumberGuessingGame() {
  const [text, setText] = React.useState("Guess a number between 1-100");
  const [guess, setGuess] = React.useState();

  const compareNumbers = () => {
    if (guess > number) {
      guesses++;
      setText(`Your guessed number (${guess}) was too high.`);
    } else if (guess < number) {
      guesses++;
      setText(`Your guessed number (${guess}) was too low.`);
    } else if (guess == number) {
      guesses++;
      alert(`You guessed the number in ${guesses} guesses`);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Number Guessing Game</Text>
      <View style={styles.view}>
        <Text>{text}</Text>
        <View style={styles.content}>
          <TextInput
            placeholder="your guess..."
            style={styles.input}
            onChangeText={(val) => setGuess(val)}
          />
          <Button title="Make a guess" onPress={compareNumbers} />
        </View>
      </View>
    </View>
  );
}
