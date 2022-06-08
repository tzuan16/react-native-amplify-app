import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import AppButton from "../components/AppButton";

export default function AppCard({ title, description, buttonTitle, onPress }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitleText}>{title}</Text>
      <View style={styles.imageContainer}></View>
      <Text style={styles.cardDescriptionText}>{description}</Text>
      <AppButton title={buttonTitle} onPress={onPress} size="sm" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingVertical: 20,
    marginVertical: 20,
    borderColor: "#c9c9c9",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingHorizontal: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: "white",
  },
  cardTitleText: {
    fontSize: 20,
    fontWeight: "700",
  },
  imageContainer: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    marginVertical: 10,
  },
  cardDescriptionText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "justify",
  },
});
