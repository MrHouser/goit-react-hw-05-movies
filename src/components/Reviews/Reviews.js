import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "../../services/MoviesApi";
import s from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then((result) => setReviews([...result.results]));
  }, []);

  const { movieId } = useParams();
  return (
    <section className={s.section}>
      <ul className={s.list}>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id} className={s.listItem}>
              <h3 className={s.author}>
                Author: <span className={s.authorName}>{author}</span>
              </h3>
              <p className={s.review}>{content}</p>
            </li>
          ))}
        {reviews && reviews.length === 0 && (
          <p>We dont have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
