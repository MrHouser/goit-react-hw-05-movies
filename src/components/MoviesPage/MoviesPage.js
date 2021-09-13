import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Searchbar from "../Searchbar/Searchbar";
import { getMoviesByQuery } from "../../services/MoviesApi";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const urlQuery = new URLSearchParams(location.search).get("query") || null;

  useEffect(() => {
    if (!query) {
      return;
    }

    if (urlQuery !== null) {
      getMoviesByQuery(query)
        .then((response) => {
          if (response.total_results === 0) {
            return toast.error(`No result for "${query}". Try another query`);
          }
          setMovies([...response.results]);
        })
        .catch(({ message }) => toast.error(message));
    }

    // history.push({
    //   ...location,
    //   search: `query=${query}`,
    // });
  }, [query, urlQuery]);

  const onSubmit = (query) => {
    setQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesPage;
