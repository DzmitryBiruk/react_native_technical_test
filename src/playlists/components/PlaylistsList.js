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
  const renderListItem = ({ item }) => {
    const { name, id } = item;
    const imageUrl = get(item, "images[0].url");

    return (
      <TouchableHighlight onPress={() => {
        navigation.navigate(ROUTE_PATHS.PLAYLIST_DETAILS, { imageUrl, name, id });
      }}
      >
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={playlists}
      renderItem={renderListItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PlaylistsList;
