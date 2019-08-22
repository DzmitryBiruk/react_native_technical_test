export const API_ROOT = "https://afternoon-waters-49321.herokuapp.com/v1";
export const PLAYLISTS = `${API_ROOT}/browse/featured-playlists`;

export const generatePlaylistApi = (playlistId) => `${API_ROOT}/playlists/${playlistId}`;
