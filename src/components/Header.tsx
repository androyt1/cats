import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => (
  <header className=" bg-gray-800  ">
    <nav className="flex justify-between items-center h-16 px-4">
      <NavLink to="/" className="flex items-center">
        <Logo />
        <span className="ml-2 text-white text-xl font-bold hidden md:inline-block">
          CatGallery
        </span>
      </NavLink>

      <div className="flex space-x-4">
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
      </div>
    </nav>
  </header>
);

export default Header;
