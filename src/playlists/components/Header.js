import React from "react";
import { Text, StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 60,
    marginBottom: 10,
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
});

const Header = ({ title }) => <Text style={styles.text}>{title}</Text>;

export default Header;
