import { combineReducers } from "redux";

import { Reducer as PlaylistReducer } from "./playlists/logic/reducer";
import { Reducer as PlaylistDetailsReducer } from "./playlistDetails/logic/reducer";

export default combineReducers({
  playlists: PlaylistReducer,
  playlistDetails: PlaylistDetailsReducer,
});
