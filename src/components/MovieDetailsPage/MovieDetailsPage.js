import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { toast } from "react-toastify";
import { getMovieDetails } from "../../services/MoviesApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import "react-toastify/dist/ReactToastify.css";
import s from "./MovieDetailsPage.module.css";

const pictureBasePath = "https://image.tmdb.org/t/p/w300";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(({ message }) => toast.error(message));

    setSearchQuery(location.state.from.search);
  }, [location.state.from.search, movieId]);

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? `/`);
  };

  console.log("location.state.from ", location.state.from);

  return (
    <div className={s.pageWrapper}>
      <button type="button" onClick={onGoBackClick} className={s.button}>
        Go back
      </button>
      {movie && (
        <>
          <article className={s.article}>
            <img
              src={`${pictureBasePath}/${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className={s.image}
            ></img>
            <div className={s.infoWrapper}>
              <h3 className={s.title}>
                {movie.title} ({movie.release_date.split("", 4)})
              </h3>
              <p className={s.score}>
                User Score:{" "}
                <span className={s.scoreValue}>{movie.vote_average}</span>
              </p>
              <h4 className={s.overviewTitle}>Overview</h4>
              <p className={s.overview}>{movie.overview}</p>
              <h4 className={s.genresTitle}>Genres</h4>
              {movie.genres.map(({ id, name }) => (
                <span key={id} className={s.genre}>
                  {name}
                </span>
              ))}
            </div>
          </article>
          <section className={s.section}>
            <h4 className={s.infoTitle}>Additional information</h4>
            <ul className={s.infoList}>
              <li className={s.infoListItem}>
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: {
                      from: {
                        ...location,
                        pathname: location.state.from.pathname,
                        search: searchQuery,
                      },
                    },
                  }}
                  className={`${s.infoLink} ${s.mr}`}
                  activeClassName={s.infoLinkActive}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: {
                      from: {
                        ...location,
                        pathname: location.state.from.pathname,
                        search: searchQuery,
                      },
                    },
                  }}
                  className={s.infoLink}
                  activeClassName={s.infoLinkActive}
                >
                  Reviews
                </NavLink>
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
    </div>
  );
};

export default MovieDetailsPage;
