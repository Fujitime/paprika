import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white border-gray-200  fixed w-full top-0 transition-all duration-300 z-50 ${
        isScrolled ? "shadow-lg py-2" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src={Logo} alt="Logo" width={60} />
            <span
              className="self-center text-3xl font-semibold whitespace-nowrap  bg-gradient-to-r from-red-500 to-green-500 rounded-lg px-2 py-1 animate-gradient"
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "rainbow 3s linear infinite"
              }}
            >
              HD Paprika
            </span>
          </div>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
          <svg
            className={`w-5 h-5 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <NavLink
                to="/"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ${
                  location.pathname === "/"
                    ? " text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-700 "
                    : ""
                }`}
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/article"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ${
                  location.pathname === "/article"
                    ? " text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-700 "
                    : ""
                }`}
              >
                Artikel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ${
                  location.pathname === "/gallery"
                    ? " text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-700 "
                    : ""
                }`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ${
                  location.pathname === "/about"
                    ? " text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-700 "
                    : ""
                }`}
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ${
                  location.pathname === "/contact"
                    ? " text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-700 "
                    : ""
                }`}
              >
                Kontak
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
