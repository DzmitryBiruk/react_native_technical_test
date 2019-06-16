const API_PATH = "https://afternoon-waters-49321.herokuapp.com/v1/browse";

export const requestsHelper = path =>
  fetch(`${API_PATH}${path}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
