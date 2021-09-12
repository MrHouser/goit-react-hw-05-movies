import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
