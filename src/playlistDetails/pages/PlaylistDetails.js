import React, { Fragment } from "react";
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

const Playlists = (props) => {
  const { navigation } = props;
  const { imageUrl, name, id } = navigation.state.params || {};

  return (
    <Fragment>
      <Text style={styles.text}>PlaylistDetails</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{imageUrl}</Text>
      <Text style={styles.text}>{id}</Text>
    </Fragment>
  );
};

export default Playlists;
