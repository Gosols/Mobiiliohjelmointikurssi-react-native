import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ShoppingList() {
  const [current, setCurrent] = React.useState("");
  const [list, setList] = React.useState([]);

  const addToList = () => {
    list.push(current);
    console.log("pressed");
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <View style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}>
      <TextInput
        placeholder="type here.."
        textAlign="center"
        style={{ borderWidth: 1, width: 150 }}
        value={current}
        onChangeText={(e) => {
          setCurrent(e);
        }}
      />
      <Button onPress={addToList} title="Add" />
      <Button onPress={clearList} title="Clear" />
      <Text style={{ fontWeight: "bold" }}>Shopping List</Text>
      {list.map((item, i) => {
        return <Text key={i}>{item}</Text>;
      })}
    </View>
  );
}
