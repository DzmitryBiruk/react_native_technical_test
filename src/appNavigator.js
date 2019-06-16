import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { Platform, Text } from "react-native";

import { appBackground } from "../constants/Colors";
import Playlists from "./playlists/pages/playlists";
import PlaylistDetails from "./playlistDetails/pages/playlistDetails";

const Routes = createStackNavigator(
  {
    Playlists,
    PlaylistDetails
  },
  {
    initialRouteName: "Playlists",
    headerMode: "none",
    cardStyle: { backgroundColor: appBackground }
  }
);

export default createAppContainer(Routes);
