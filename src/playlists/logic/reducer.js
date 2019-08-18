import { PLAYLISTS_LOAD } from "./constants";

export const Reducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYLISTS_LOAD.START:
      return {
        ...state,
        isLoading: true,
      };
    case PLAYLISTS_LOAD.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case PLAYLISTS_LOAD.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
