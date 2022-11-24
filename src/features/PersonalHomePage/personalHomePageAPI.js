import axios from "axios";

export const getRepo = (username) =>
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.data);
