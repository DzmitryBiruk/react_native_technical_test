import { createStackNavigator, createAppContainer } from "react-navigation";

import Playlists from "./playlists/pages/Playlists";
import PlaylistDetails from "./playlistDetails/pages/PlaylistDetails";
import { ROUTE_PATHS } from "./constants/routePaths";

const Routes = createStackNavigator(
  {
    [ROUTE_PATHS.PLAYLISTS]: Playlists,
    [ROUTE_PATHS.PLAYLIST_DETAILS]: PlaylistDetails,
  },
  {
    initialRouteName: "Playlists",
    headerMode: "none",
    cardStyle: { backgroundColor: "black" },
  },
);

export default createAppContainer(Routes);
