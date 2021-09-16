import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";

const pictureBasePath = "https://image.tmdb.org/t/p/w300";

export default function MoviesList({ movies, location, path }) {
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(({ id, title, poster_path }) => (
          <li key={id} className={s.listItem}>
            <Link
              to={{
                pathname: `${path}/${id}`,
                state: { from: location },
              }}
            >
              <div className={s.card}>
                <img
                  className={s.image}
                  src={
                    (poster_path && `${pictureBasePath}${poster_path}`) ||
                    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
                  }
                  alt={title}
                />
                <p className={s.title}>{title}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
