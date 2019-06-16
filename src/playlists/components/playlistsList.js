import React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { get } from "lodash";

export default function PlaylistsList({ playlists = [] }) {
  const folderImagesArray = playlists.map(playlisObj => {
    return { url: get(playlisObj, "images[0].url") };
  });

  return (
    <FlatList
      numColumns={2}
      data={folderImagesArray}
      renderItem={({ item }) => (
        <Image style={styles.image} source={{ uri: item.url }} />
      )}
      keyExtractor={item => item.url}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    margin: 10
  },
  list: {
    display: "flex",
    flexDirection: "row"
  }
});
