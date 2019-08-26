import React from "react";
import {
  View, Text, StyleSheet, Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../constants/colors";
import { SPOTIFY_PLAYLIST } from "../../constants/appText";

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  header: {
    fontSize: 24,
    color: COLORS.WHITE,
    fontWeight: "500",
  },
  label: {
    fontSize: 11,
    marginTop: -2,
    color: COLORS.GRAY,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    color: COLORS.WHITE,
    fontWeight: "400",
  },
  image: {
    height: 130,
    width: 130,
    margin: 10,
  },
});

const PlaylistDescription = (props) => {
  const { imageUrl, name, description } = props;

  return (
    <LinearGradient
      colors={[COLORS.GREEN_BACKGROUND, COLORS.BLACK]}
      start={[0, 1]}
      end={[0, 0]}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.label}>{SPOTIFY_PLAYLIST}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.label}>Followers: ...</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PlaylistDescription;
