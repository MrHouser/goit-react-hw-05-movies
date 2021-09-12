import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from "../../services/MoviesApi";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then((result) => setReviews([...result.results]));
  }, []);

  const { movieId } = useParams();
  return (
    <section>
      <ul>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
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
