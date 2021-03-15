import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Slider from "@react-native-community/slider";
import Clipboard from "expo-clipboard";

let charSet =
  "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789,.-!@#$%][=_+/";
export default function App() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(10);

  function generatePass() {
    let pass = "";
    for (let i = 0, n = charSet.length; i < size; i++) {
      pass += charSet.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert("Senha copiada com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={16}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#fff"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity onPress={generatePass} style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.area}>
          <Text onLongPress={copyPass} style={styles.password}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3ff",
  },
  logo: {
    marginBottom: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#ffa200",
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
});
