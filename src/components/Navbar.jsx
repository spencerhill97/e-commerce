import { NavLink, Outlet } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky w-full top-0 bg-gray-200 px-8 py-4 shadow-sm z-10">
      <div className="flex max-w-[1200px] justify-between">
        <h3>Logo</h3>
        <ul className="sm:flex gap-x-10 capitalize hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="grid place-items-center">
                <NavLink to={link.href}>
                  {link.name === "cart" ? (
                    <FaShoppingCart className="text-lg" />
                  ) : (
                    link.name
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
