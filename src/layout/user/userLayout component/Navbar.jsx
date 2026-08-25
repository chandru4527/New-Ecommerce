import { useState } from "react";
import Logo from "../../../assets/schon logo.webp";
// import ThemeToggle from '../../../components/ThemeToggle'
import { MdMenu, MdClose } from "react-icons/md";
import {
  FaRegHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive
      ? "text-black dark:text-white"
      : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
    }`;

  return (
    <header className="relative border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">

      {/* Header */}
      <div className="w-full">

        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-6">

          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Schon"
                className="h-auto w-28"
              />
            </NavLink>
          </div>

          {/* Right Icons */}
          <div className="ml-auto flex items-center gap-1">
             {/* Desktop Navigation */}
          <nav className="ml-10 hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="mr-2 flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white lg:hidden"
              aria-label="Open menu"
            >
              <MdMenu size={27} />
            </button>

            {/* Wishlist */}
            <NavLink
              to="/wishlist"
              className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
              aria-label="Wishlist"
            >
              <FaRegHeart size={19} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white dark:bg-white dark:text-black">
                0
              </span>
            </NavLink>

            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
              aria-label="Shopping cart"
            >
              <FaShoppingCart size={19} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white dark:bg-white dark:text-black">
                0
              </span>
            </NavLink>

            {/* Profile */}
            <NavLink
              to="/profile"
              className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
              aria-label="Account"
            >
              <FaUser size={18} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
      />


    </header>
  );
};

export default Navbar;