import React from "react";
import {
  FlatList, StyleSheet, Image, TouchableHighlight,
} from "react-native";
import { get } from "lodash";

import { ROUTE_PATHS } from "../../constants/routePaths";

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    margin: 10,
  },
});

const PlaylistsList = ({ playlists = [], navigation }) => {
  const folderImagesArray = playlists.map((playlisObj) => ({
    url: get(playlisObj, "images[0].url"),
  }));

  const renderListItem = ({ item }) => (
    <TouchableHighlight onPress={() => {
      navigation.navigate(ROUTE_PATHS.PLAYLIST_DETAILS);
    }}
    >
      <Image
        style={styles.image}
        source={{ uri: item.url }}
      />
    </TouchableHighlight>
  );

  return (
    <FlatList
      numColumns={2}
      data={folderImagesArray}
      renderItem={renderListItem}
      keyExtractor={(item) => item.url}
    />
  );
};

export default PlaylistsList;
