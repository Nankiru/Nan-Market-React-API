import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/icons/market.png";
import TelegramLogo from "../assets/icons/telegram.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Features", to: "/features" },
  { name: "Products", to: "/products" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  return (
    <div>
      {" "}
      <nav
        ref={navRef}
        className="w-full px-4 py-2 flex rounded-2xl items-center justify-between bg-white/60 backdrop-blur-md shadow-md sticky top-0 left-0 z-50"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 " />
          {/* <span className="text-xl font-bold bg-gradient-to-r from-[#f042ff] to-[#f775b1] bg-clip-text text-transparent ">
            Nan<span> Market</span>
          </span> */}
        </Link>

        {/* Nav Links (center, hidden on mobile) */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-1 pb-1 transition-colors duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#f042ff] to-[#f775b1] bg-clip-text text-transparent"
                      : "hover:text-blue-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 bg-linear-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                      {link.name}
                    </span>
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-linear-to-r from-rose-400 rounded-xl to-gray-400 via-pink-500 transition-transform duration-300 origin-left pointer-events-none ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button (right) */}
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/nan_fullstack"
            className="px-6 py-2 rounded-lg hidden md:block text-black font-semibold shadow-lg backdrop-blur-md bg-white/30 border border-white/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f042ff] hover:to-[#f775b1] hover:text-white hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            style={{
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)",
            }}
          >
            Contact
          </a>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-white/10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-[#f042ff] to-[#f775b1] mb-1 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-[#f042ff] to-[#f775b1] mb-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gradient-to-r from-[#f042ff] to-[#f775b1] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden rounded-bl-2xl rounded-br-2xl sticky mt-[-20px] left-0 w-full bg-white/60 p-4 text-xs font-Suwannaphum backdrop-blur-md z-40 shadow-lg animate-fade-in"
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-blue-400 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-1 pb-1 transition-colors duration-200 ${
                      isActive
                        ? "bg-linear-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent"
                        : "hover:text-blue-300"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center justify-center content-center">
              <a
                href="https://t.me/nan_fullstack"
                className="bg-gradient-to-r from-[#0088cc] to-[#4f8edc] hover:from-[#4f8edc] hover:to-[#0088cc] px-6 py-2 rounded-xl flex items-center justify-center gap-2 text-white font-semibold shadow-lg transition-all duration-400 hover:scale-105 hover:shadow-2xl backdrop-blur-md border border-blue-200"
                style={{
                  boxShadow: "0 4px 16px rgba(0,136,204,0.10)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                <img
                  src={TelegramLogo}
                  alt="Telegram Logo"
                  className="w-6 h-6 drop-shadow-md"
                />
                <span className="tracking-wide">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
