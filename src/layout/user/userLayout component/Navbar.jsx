import Logo from "../../../assets/schon logo.webp";
import {
  MdMenu,
  MdFavoriteBorder,
  MdShoppingBag,
  MdPerson,
} from "react-icons/md";

const Navbar = () => {
  return (
    <header className="relative border-b border-gray-200 bg-white">
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-6">

          {/* Logo */}
          <div className="shrink-0">
            <a href="/" className="inline-block">
              <img
                src={Logo}
                alt="Schon"
                className="h-auto w-28"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="ml-10 hidden items-center gap-8 lg:flex">
            <a
              href="/"
              className="text-sm font-medium text-gray-800 transition hover:text-black"
            >
              Home
            </a>

            <a
              href="/products"
              className="text-sm font-medium text-gray-800 transition hover:text-black"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-800 transition hover:text-black"
            >
              Collections
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-800 transition hover:text-black"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-sm font-medium text-gray-800 transition hover:text-black"
            >
              Contact
            </a>
          </nav>

          {/* Right Icons */}
          <div className="ml-auto flex items-center gap-1">

            {/* Mobile Menu */}
            <button
              type="button"
              className="mr-2 flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black lg:hidden"
              aria-label="Toggle menu"
            >
              <MdMenu size={26} />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black"
              aria-label="Wishlist"
            >
              <MdFavoriteBorder size={24} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                0
              </span>
            </button>

            {/* Cart */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black"
              aria-label="Shopping bag"
            >
              <MdShoppingBag size={24} />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                0
              </span>
            </button>

            {/* Profile */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-black"
              aria-label="Account"
            >
              <MdPerson size={24} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;