import { combineReducers } from "redux";

import { Reducer as PlaylistReducer } from "./playlists/logic/reducer";

export default combineReducers({
  playlists: PlaylistReducer,
});
