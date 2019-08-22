import { PLAYLIST_DETAILS_LOAD } from "./constants";

export const playlistDetailsLoadStart = (playlistId) => ({
  type: PLAYLIST_DETAILS_LOAD.START,
  payload: playlistId,
});

export const playlistDetailsLoadSuccess = (data) => ({
  type: PLAYLIST_DETAILS_LOAD.SUCCESS,
  payload: data,
});

export const playlistDetailsLoadError = (error) => ({
  type: PLAYLIST_DETAILS_LOAD.ERROR,
  payload: error,
});
