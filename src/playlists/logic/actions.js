import { PLAYLISTS_LOAD } from "./constants";

export const playlistsLoadStart = () => ({
  type: PLAYLISTS_LOAD.START
});

export const playlistsLoadSuccess = result => ({
  type: PLAYLISTS_LOAD.SUCCESS,
  payload: result
});

export const playlistsLoadError = error => ({
  type: PLAYLISTS_LOAD.ERROR,
  payload: error
});
