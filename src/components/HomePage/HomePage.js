import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { getTrendingMovies } from "../../services/MoviesApi";
import MoviesList from "../MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

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
      {movies && (
        <MoviesList movies={movies} location={location} path={"/movies"} />
      )}
    </>
  );
};

export default HomePage;
