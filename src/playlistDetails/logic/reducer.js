import { PLAYLIST_DETAILS_LOAD } from "./constants";

export const Reducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST_DETAILS_LOAD.START:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case PLAYLIST_DETAILS_LOAD.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case PLAYLIST_DETAILS_LOAD.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
