import { Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <Route path="/" exact component={HomePage} />

          <Route path="/movies/:movieId" component={MovieDetailsPage} />

          <Route path="/movies" exact component={MoviesPage} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
