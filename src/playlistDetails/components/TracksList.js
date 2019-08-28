import React, { Fragment } from "react";
import {
  Text, View, FlatList, StyleSheet,
} from "react-native";
import { get, isEmpty } from "lodash";

import { COLORS } from "../../constants/colors";
import { NO_TRACKS, UNKNOWN_ARTIST } from "../../constants/appText";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: "500",
  },
  trackName: {
    fontSize: 16,
    marginTop: 14,
    color: COLORS.GRAY_LIGHT,
    fontWeight: "400",
  },
  trackArtist: {
    fontSize: 14,
    color: COLORS.GRAY,
    fontWeight: "400",
  },
  inactive: {
    color: COLORS.GRAY_DARK,
  },
});

const TracksList = (props) => {
  const tracks = get(props, "tracks.items");

  if (isEmpty(tracks)) {
    return (<Text style={styles.label}>{NO_TRACKS}</Text>);
  }

  const generateTrackRow = ({ item }) => {
    const { name, preview_url: previewUrl, artists = [] } = item.track;

    const artistsNamesList = artists.map((artistObj) => {
      if (!artistObj.name) {
        return UNKNOWN_ARTIST;
      }
      return artistObj.name;
    });
    const artistsNames = artistsNamesList.join(", ");

    return (
      <Fragment>
        <Text style={[styles.trackName, previewUrl ? null : styles.inactive]}>
          {name}
        </Text>
        <Text style={[styles.trackArtist, previewUrl ? null : styles.inactive]}>
          {artistsNames}
        </Text>
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={generateTrackRow}
        keyExtractor={(item) => item.track.id}
      />
    </View>
  );
};

export default TracksList;
