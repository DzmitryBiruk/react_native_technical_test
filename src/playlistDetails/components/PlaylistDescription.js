import React, { Fragment } from "react";
import { Text, StyleSheet, Image } from "react-native";

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
  image: {
    width: 160,
    height: 160,
    margin: 10,
  },
});

const PlaylistDescription = (props) => {
  const { imageUrl, name, description } = props;

  return (
    <Fragment>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
    </Fragment>
  );
};

export default PlaylistDescription;
