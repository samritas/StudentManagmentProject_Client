import React, { Fragment, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { FiAlignLeft } from "react-icons/fi";
import logo from "../../Assets/School/school-logo.png";

const Header = () => {
  // use state
  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);

  const navRef = useRef();
  const location = useLocation();
  // const navigate = useNavigate();
  navRef.current = navBackground;

  // use effect
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 96;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // styles
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#007459" : navBackground ? "#2b2b2b" : "#2b2b2b",
    };
  };
  const linkColor =
    "px-5 py-2 flex items-center leading-snug font-display hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300";

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "white" : "white";
      case "/about":
        return navBackground ? "white" : "white";
      default:
        return navBackground ? "#white" : "white";
    }
  };

  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-28 h-24"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
      default:
        return (
          <img
            className="xl:w-48 md:w-32 w-20"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
    }
  };

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  // return
  return (
    <>
      <div
        style={{
          background: styles(),
          position: navBackground ? "fixed" : "absolute",
          boxShadow: navBackground
            ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            : "0 0 #0000",
        }}
        className="xl:bg-white right-0 left-0 z-10 border-none"
        p="md"
      >
        <div
          className="pl-3"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <div className="container flex justify-between items-center mx-auto px-3 text-white">
            <div className="flex">
              <div className="flex bg-white justify-between items-center fixed md:relative left-0 top-0 w-full">
                <div
                  onClick={handleNav}
                  className="block md:hidden text-textColor my-2 ml-4"
                >
                  {!nav && <FiAlignLeft size={28} />}
                </div>
                <div className="flex mr-4 pt-2">
                  <NavLink to="/">{logos}</NavLink>
                </div>
              </div>
            </div>
            <ul className="hidden md:flex">
              <li className="p-1 uppercase">
                <NavLink style={navLinkStyles} className={linkColor} to="/">
                  Home
                </NavLink>
              </li>
              <li className="p-1 uppercase">
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/students"
                >
                  Student
                </NavLink>
              </li>
              <li className="p-1 uppercase">
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/services"
                >
                  Teacher
                </NavLink>
              </li>

              <li className="p-1 uppercase">
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/blogs"
                >
                  Partner
                </NavLink>
              </li>
              <li className="p-1 uppercase">
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul
              className={
                nav
                  ? "xl:hidden fixed left-0 top-0 w-full text-textColor bg-white ease-in-out duration-500 hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <div className="flex items-center justify-between  my-6">
                <h1>
                  <img className="w-20 ml-4" src={logo} alt="Logo" />
                </h1>
                <h1 onClick={handleNav} className="mr-4">
                  {" "}
                  {nav && <HiOutlineX size={20} className="text-black" />}
                </h1>
              </div>
              <li className="p-4 text-center uppercase">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="p-4 text-center uppercase">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/students"
                >
                  Student
                </a>
              </li>
              <li className="p-4 text-center uppercase">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/teachers"
                >
                  Teacher
                </a>
              </li>
              <li className="p-4 text-center uppercase">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/partners"
                >
                  Partner
                </a>
              </li>
              <li className="p-4 text-center uppercase">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
