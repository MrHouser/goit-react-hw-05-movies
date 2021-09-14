import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>LOADING...</p>}>
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
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
