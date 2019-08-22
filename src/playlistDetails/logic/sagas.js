import { takeLatest, put } from "redux-saga/effects";

import { playlistDetailsLoadSuccess, playlistDetailsLoadError } from "./actions";
import { http } from "../../shared/http";
import { PLAYLIST_DETAILS_LOAD } from "./constants";
import { generatePlaylistApi } from "../../constants/api";


function* handleDetailsLoad(action) {
  try {
    const apiPath = generatePlaylistApi(action.payload);
    const response = yield http(apiPath);
    yield put(playlistDetailsLoadSuccess(response));
  } catch (err) {
    yield put(playlistDetailsLoadError(err));
  }
}


export function* playlistDetailsSagas() {
  yield takeLatest(PLAYLIST_DETAILS_LOAD.START, handleDetailsLoad);
}
