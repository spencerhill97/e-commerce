import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { navLinks } from "../data/navLinks";

function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full justify-end bg-gray-200 px-8 py-5">
      <ul className="flex gap-x-10 capitalize">
        {navLinks.map((link) => {
          return (
            <li key={link.id} className="grid place-items-center">
              <NavLink to={link.href}>
                {link.name === "cart" ? <FaShoppingCart /> : link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
