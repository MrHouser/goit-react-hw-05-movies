import { Link, useRouteMatch, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { getMoviesByQuery } from "../../services/MoviesApi";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!query) {
      return;
    }

    getMoviesByQuery(query).then((response) => {
      if (response.total_results === 0) {
        return alert(`No result for "${query}". Try another query`);
      }
      setMovies([...response.results]);
    });
  }, [query]);

  const onSubmit = (query) => {
    setQuery(query);
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
