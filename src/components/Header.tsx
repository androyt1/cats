import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

const Header = () => (
  <header className=" bg-stone-800  ">
    <nav className="flex justify-between items-center h-16 px-4">
      <NavLink to="/" className="flex items-center">
        <Logo />
        <span className="ml-2 text-white text-xl font-bold hidden md:inline-block">
          CatGallery
        </span>
      </NavLink>

      <div className="flex items-center space-x-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-stone-400"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-stone-400"
          }
          to="/upload"
        >
          Upload
        </NavLink>
        <ModeToggle />
      </div>
    </nav>
  </header>
);

export default Header;
