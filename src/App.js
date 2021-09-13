import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
