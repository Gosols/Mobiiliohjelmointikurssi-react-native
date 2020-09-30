import React from "react";
import { View, FlatList, Text } from "react-native";

export default function HistoryPage({ route, navigation }) {
  const { history } = route.params;

  const renderItem = ({ item }) => {
    return <Text style={{ fontSize: 30, textAlign: "center" }}>{item}</Text>;
  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "black" }}></View>;
  };

  return (
    <View>
      <FlatList
        data={history}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        keyExtractor={(item, i) => i.toString()}
      />
    </View>
  );
}
