import { Link } from "react-router-dom";

const NavLink = ({ to, className = "", linkClassName = "", text }) => (
  <li className={className}>
    <Link className={linkClassName} to={to}>
      {text}
    </Link>
  </li>
);

export default NavLink;
