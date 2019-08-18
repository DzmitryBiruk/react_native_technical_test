import { createStackNavigator, createAppContainer } from "react-navigation";

import Playlists from "./playlists/pages/playlists";
import PlaylistDetails from "./playlistDetails/pages/playlistDetails";

const Routes = createStackNavigator(
  {
    Playlists,
    PlaylistDetails,
  },
  {
    initialRouteName: "Playlists",
    headerMode: "none",
    cardStyle: { backgroundColor: "black" },
  },
);

export default createAppContainer(Routes);
