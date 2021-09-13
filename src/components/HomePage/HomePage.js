import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { getTrendingMovies } from "../../services/MoviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then((response) => {
        setMovies([...response.results]);
      })
      .catch(({ message }) => toast.error(message));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
