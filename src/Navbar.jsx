import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/red">Red</NavLink>
      <NavLink to="/blue">Blue</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}
