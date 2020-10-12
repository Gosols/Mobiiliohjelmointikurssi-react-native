import React, { useEffect, useState } from "react";
import { View, FlatList, Button, TextInput, Image, Text } from "react-native";

export default function RecipeFinder() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  const getData = async () => {
    await fetch(`http://www.recipepuppy.com/api/?i=${input}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(recipes);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{ width: 70, height: 70, borderRadius: 10, flex: 1 }}
          source={{ uri: item.thumbnail }}
        />
        <Text style={{ flex: 5, textAlign: "center" }}>{item.title}</Text>
      </View>
    );
  };

  const separator = () => {
    return <View style={{ height: 5 }}></View>;
  };

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        style={{ height: "80%" }}
        renderItem={renderItem}
        data={recipes}
        ItemSeparatorComponent={separator}
      />
      <TextInput
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
      />
      <Button
        title="Search"
        onPress={() => {
          getData();
        }}
      />
    </View>
  );
}
