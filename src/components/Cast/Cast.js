import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getMovieCast } from "../../services/MoviesApi";
import s from "./Cast.module.css";

const pictureBasePath = "https://image.tmdb.org/t/p/w200";
const pictureBlank =
  "https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png";

const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then((result) => setCast([...result.cast]))
      .catch(({ message }) => toast.error(message));
  }, []);

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s.listItem}>
              <img
                src={
                  profile_path
                    ? `${pictureBasePath}/${profile_path}`
                    : pictureBlank
                }
                alt={`${name}`}
                className={s.image}
              ></img>
              <p className={s.name}>{name}</p>
              <p className={s.character}>
                {character !== ""
                  ? `Character: ${character}`
                  : "Character: n/a"}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Cast;
