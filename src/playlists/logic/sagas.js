import { put, takeLatest } from "redux-saga/effects";

import { PLAYLISTS_LOAD, PLAYLISTS_API } from "./constants";
import { playlistsLoadSuccess, playlistsLoadError } from "./actions";
import { requestsHelper } from "../../shared/requestsHelper";

function* handlePlaylistsLoad() {
  try {
    const response = yield requestsHelper(PLAYLISTS_API);
    yield put(playlistsLoadSuccess(response));
  } catch (err) {
    console.log(err.message);
    yield put(playlistsLoadError(err.message));
  }
}

export function* playlistsLoadSagas() {
  yield takeLatest(PLAYLISTS_LOAD.START, handlePlaylistsLoad);
}
