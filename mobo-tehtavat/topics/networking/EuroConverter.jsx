import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function EuroConverter() {
  const [euros, setEuros] = useState();
  const [conversion, setConversion] = useState();
  const [pickerData, setData] = useState({});
  const [pickerItems, setPicker] = useState([]);
  const [rate, setRate] = useState();
  const [isReady, setReady] = useState(false);
  const [selected, setSelected] = useState();

  const getData = async () => {
    await fetch(`https://api.exchangeratesapi.io/latest`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.rates);
        setPicker(Object.keys(data.rates));
      });
    setReady(true);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isReady) {
    return (
      <View>
        <Text>Giggles</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Text style={{ fontSize: 25 }}>
          ({selected}) {conversion}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", width: "50%" }}>
          <TextInput
            placeholder="€€€"
            textAlign="center"
            style={{ borderWidth: 1, width: 200, flex: 1 }}
            keyboardType="number-pad"
            onChangeText={(txt) => {
              setEuros(parseInt(txt));
            }}
          />
          <Picker
            selectedValue={selected}
            mode="dropdown"
            style={{ width: "50%", flex: 1 }}
            onValueChange={(itemV, i) => {
              setRate(itemV);
              setSelected(pickerItems[i]);
            }}
          >
            {pickerItems.map((item, i) => {
              return (
                <Picker.Item key={i} label={item} value={pickerData[item]} />
              );
            })}
          </Picker>
        </View>
        <Button
          title="convert"
          color="red"
          onPress={() => {
            setConversion((euros * rate).toFixed(2));
          }}
        />
        <Text style={{ width: "50%" }}>
          en saa Pickerin valittua arvoa muutettua. (painaessa se muuttuu
          hetkeksi, mutta palaa millisekunnissa takaisin arvoon "CAD")
        </Text>
        <Text style={{ width: "50%" }}>
          CAD:ia ei myöskään jostain syystä pysty valitsemaan eikä
          konvertoimaan. syytä en saanut selville.
        </Text>
      </View>
    );
  }
}
