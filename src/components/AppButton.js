import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default function AppButton({ title, onPress, size = "lg" }) {
  return (
    <TouchableOpacity
      style={[styles.button, styles["button" + size]]}
      onPress={onPress}
    >
      <Text style={styles["buttonText" + size]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    marginVertical: 10,
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
