import NavLink from "./NavLink";
import SearchInput from "../ui/SearchInput";
import LogoIcon from "../../icons/LogoIcon";
import Hamburger from "../../icons/Hamburger";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="flex flex-wrap items-center justify-center px-4 bg-blue-400 shadow-lg">
      <nav className="flex items-center w-full py-4 max-w-7xl">
        <Link to="/" className="mr-auto">
          <LogoIcon />
        </Link>
        <ul className="hidden text-white gap-8 sm:flex">
          <NavLink to="/auth/signin" text="Sign in" />
          <NavLink to="/auth/signup" text="Sign up" />
        </ul>
        <SearchInput
          f="questions"
          value={searchQuery}
          onChange={handleChange}
          className="hidden sm:block p-1 pl-2 ml-4"
        />
        <Hamburger
          className="cursor-pointer sm:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        />
      </nav>
      {mobileNavOpen && (
        <div className="w-full sm:hidden">
          <ul className="text-white">
            <SearchInput
              f="questions"
              value={searchQuery}
              onChange={handleChange}
              className="w-full p-4 mb-4 text-sm"
            />
            <NavLink to="/auth/signin" text="Sign in" className="mb-4" />
            <NavLink to="/auth/signup" text="Sign up" className="mb-4" />
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
