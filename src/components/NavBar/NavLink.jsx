import { Link } from "react-router-dom";

const NavLink = ({ to, className = "", linkClassName = "" }) => (
  <li className={className}>
    <Link className={linkClassName} to={to}>
      Sign In
    </Link>
  </li>
);

export default NavLink;
