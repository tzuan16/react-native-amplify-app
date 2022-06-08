import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function AppListButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    padding: 30,
  },
  buttonlg: {
    borderRadius: 15,
    padding: 15,
    width: "80%",
  },
  buttonsm: {
    borderRadius: 10,
    padding: 10,
  },
  buttonTextlg: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  buttonTextsm: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
