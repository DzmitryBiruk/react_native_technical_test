import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

const Loading = ({ color }) => {
  const spinnerColor = color || COLORS.BLUE_SPINNER;

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={spinnerColor} />
    </View>
  );
};

export default Loading;
