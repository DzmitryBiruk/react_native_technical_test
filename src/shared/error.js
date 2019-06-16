import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Error() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text style={styles.text}>Error Loading Data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  text: {
    fontWeight: "bold",
    color: "#fff"
  }
});
