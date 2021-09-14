import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Searchbar from "../Searchbar/Searchbar";
import { getMoviesByQuery } from "../../services/MoviesApi";
import MoviesList from "../MoviesList/MoviesList";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const urlQuery = new URLSearchParams(location.search).get("query") || null;

  useEffect(() => {
    if (!urlQuery) {
      return;
    }

    getMoviesByQuery(urlQuery)
      .then((response) => {
        if (response.total_results === 0) {
          return toast.error(`No result for "${urlQuery}". Try another query`);
        }
        setMovies([...response.results]);
      })
      .catch(({ message }) => toast.error(message));
  }, [urlQuery]);

  const onSubmit = (query) => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} path={url} location={location} />}
    </>
  );
};

export default MoviesPage;
