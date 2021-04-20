import clsx from "clsx";
import { Link } from "react-router-dom";

const NavLink = ({ to, className = "", linkClassName = "", text }) => (
  <li
    className={clsx("hover:bg-blue-300 p-2 rounded cursor-pointer", className)}
  >
    <Link className={linkClassName} to={to}>
      {text}
    </Link>
  </li>
);

export default NavLink;
