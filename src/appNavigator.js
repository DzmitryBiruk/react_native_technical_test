import { createStackNavigator, createAppContainer } from "react-navigation";

import Playlists from "./playlists/pages/Playlists";
import PlaylistDetails from "./playlistDetails/pages/PlaylistDetails";

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
