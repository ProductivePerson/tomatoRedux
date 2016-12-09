import axios from 'axios';

function omdbSearch(string, list, description) {
  let type = list ? 's' : 'i',
      plot = description ? 'long' : 'short';

  return `http://www.omdbapi.com/?${type}=${string.split(" ").join('+')}&plot=${plot}&r=json`;
}

export const getMovieList = (str) =>
  axios.get(omdbSearch(str, true));

export const getSingleMovie = (str) =>
  axios.get(omdbSearch(str, false, true));
