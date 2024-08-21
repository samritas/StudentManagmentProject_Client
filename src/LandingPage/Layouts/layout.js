import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/footer";
import { Helmet } from "react-helmet";
import Header from "./Header/header";
const Layout = ({ children, title, description, keywords, author }) => {
  const location = useLocation();

  const protectedHeader = () => {
    switch (location.pathname) {
      case "/sign-in":
        return null;
      case "/create-account":
        return null;
      case "/coming-soon":
        return null;
      default:
        return <Header />;
    }
  };
  const protectedFooter = () => {
    switch (location.pathname) {
      case "/sign-in":
        return null;
      case "/create-account":
        return null;
      case "/coming-soon":
        return null;
      default:
        return <Footer />;
    }
  };
  const [navBackground, setNavBackground] = useState(false);
  //ref that hold value navbackground val
  const navRef = useRef();

  navRef.current = navBackground;

  // use effect
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {protectedHeader()}
      {navBackground && <div className="h-[96px]"></div>}
      <main>{children}</main>
      {/* {protectedFooter()} */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Students Management System - Your School Name",
  description:
    "Manage students effectively in Addis Ababa with our comprehensive Students Management System.",
  keywords:
    "Students Management, Addis Ababa, Education System, School Management",
  author: "Waklara | Software Development Company",
};

export default Layout;
