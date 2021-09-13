import { useState, useEffect } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieDetails } from "../../services/MoviesApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import "react-toastify/dist/ReactToastify.css";

const pictureBasePath = "https://image.tmdb.org/t/p/w300";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => toast.error(message));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <article>
            <img
              src={`${pictureBasePath}/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            ></img>
            <h3>
              {movie.title} ({movie.release_date.split("", 4)})
            </h3>
            <p>User Score: {movie.vote_average}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            {movie.genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </article>
          <section>
            <h4>additional information</h4>
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </section>

          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
