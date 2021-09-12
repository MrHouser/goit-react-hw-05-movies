import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className="" activeClassName="">
        Home
      </NavLink>
      <NavLink to="/movies" className="" activeClassName="">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
