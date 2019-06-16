import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return <Text style={styles.text}>{`${title}`}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 60,
    marginBottom: 10,
    color: "#fff",
    fontWeight: "bold"
  }
});
