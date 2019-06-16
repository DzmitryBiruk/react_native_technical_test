import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { Platform, Text } from "react-native";

import Playlists from "./playlists/pages/playlists";
import PlaylistDetails from "./playlistDetails/pages/playlistDetails";

const PlaylistsStack = createStackNavigator({
  Playlists
});

PlaylistsStack.navigationOptions = {
  tabBarLabel: "Playlists",
  tabBarIcon: ({ focused }) => <Text>Playlists</Text>
};

const PlaylistDetailsStack = createStackNavigator({
  PlaylistDetails
});

PlaylistDetailsStack.navigationOptions = {
  tabBarLabel: "Playlist Details",
  tabBarIcon: ({ focused }) => <Text>Playlist Details</Text>
};

const bottomNav = createBottomTabNavigator({
  PlaylistsStack,
  PlaylistDetailsStack
});

export default createAppContainer(
  createSwitchNavigator({
    Main: bottomNav
  })
);
