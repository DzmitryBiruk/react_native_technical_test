export const http = (path) => fetch(path).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
});
