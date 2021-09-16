import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <p className={s.logo}>
        MOVIE<span className={s.logoAccent}>SEARCH</span>
      </p>
      <nav>
        <NavLink
          exact
          to="/"
          className={`${s.link} ${s.mr}`}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
