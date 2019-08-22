import { all } from "redux-saga/effects";

import { playlistsLoadSagas } from "./playlists/logic/sagas";
import { playlistDetailsSagas } from "./playlistDetails/logic/sagas";

export default function* () {
  yield all([playlistsLoadSagas(), playlistDetailsSagas()]);
}
