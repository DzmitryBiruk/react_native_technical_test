import { API_ROOT } from "../constants/api";

export const http = (path) => fetch(`${API_ROOT}${path}`).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
});
