import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { ERROR_LOADING_DATA } from "../constants/appText";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    color: COLORS.WHITE,
  },
});

const Error = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Text style={styles.text}>{ERROR_LOADING_DATA}</Text>
  </View>
);

export default Error;
