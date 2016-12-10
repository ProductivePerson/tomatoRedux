import axios from 'axios';

function omdbSearch(string, list, description, tScore) {
  let searchType = list ? 's' : 'i',
      plot = description ? 'long' : 'short',
      tomato = tScore ? "&tomatoes=true" : "";

  return `http://www.omdbapi.com/?${searchType}=${string.split(" ").join('+')}` +
    `&type=movie&plot=${plot}${tomato}&r=json`;
}

export const getMovieList = (str) =>
  axios.get(omdbSearch(str, true));

export const getSingleMovie = (str) =>
  axios.get(omdbSearch(str, false, true, true));
