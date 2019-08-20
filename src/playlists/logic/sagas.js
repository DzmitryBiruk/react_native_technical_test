import { put, takeLatest } from "redux-saga/effects";

import { playlistsLoadSuccess, playlistsLoadError } from "./actions";
import { http } from "../../shared/http";
import { PLAYLISTS_LOAD } from "./constants";
import { PLAYLISTS } from "../../constants/api";

function* handlePlaylistsLoad() {
  try {
    const response = yield http(PLAYLISTS);
    yield put(playlistsLoadSuccess(response));
  } catch (err) {
    yield put(playlistsLoadError(err.message));
  }
}

export function* playlistsLoadSagas() {
  yield takeLatest(PLAYLISTS_LOAD.START, handlePlaylistsLoad);
}
