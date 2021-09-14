import { Link } from "react-router-dom";

export default function MoviesList({ movies, location, path }) {
  console.log("location: ", location);
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${path}/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
