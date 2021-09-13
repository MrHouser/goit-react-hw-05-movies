const BASE = {
  URL: "https://api.themoviedb.org/3",
  KEY: "17efd9533173edd759f83ef376bcff4f",
  LANG: "language=en-US",
};

const makeCustomThen = () => {
  return (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error("Something went wrong, go back and try again.")
    );
  };
};

export function getTrendingMovies() {
  return fetch(`${BASE.URL}/trending/movie/day?api_key=${BASE.KEY}`).then(
    makeCustomThen()
  );
}

export function getMoviesByQuery(query) {
  return fetch(
    `${BASE.URL}/search/movie?api_key=${BASE.KEY}&${BASE.LANG}&query=${query}&page=1&include_adult=false`
  ).then(makeCustomThen());
}

export function getMovieDetails(id) {
  return fetch(`${BASE.URL}/movie/${id}?api_key=${BASE.KEY}&${BASE.LANG}`).then(
    makeCustomThen()
  );
}

export function getMovieCast(id) {
  return fetch(
    `${BASE.URL}/movie/${id}/credits?api_key=${BASE.KEY}&${BASE.LANG}`
  ).then(makeCustomThen());
}

export function getMovieReviews(id) {
  return fetch(
    `${BASE.URL}/movie/${id}/reviews?api_key=${BASE.KEY}&${BASE.LANG}&page=1`
  ).then(makeCustomThen());
}
