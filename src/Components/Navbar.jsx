"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartUiActions } from "../store/shopping-cart/cartUiSlice";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const header = useRef();
  const navMenu = useRef();
  const themeButton= useRef();

  // Check if localStorage is available
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const [selectedTheme, setSelectedTheme] = useState(
    isLocalStorageAvailable
      ? localStorage.getItem("selected-theme") || "light"
      : null
  );
  const [selectedIcon, setSelectedIcon] = useState(
    isLocalStorageAvailable
      ? localStorage.getItem("selected-icon") || "bx-sun"
      : null
  );

  const darkTheme = "dark-theme";
  const iconTheme = "bx-sun"; // Without specific icon class

  const getCurrentTheme = () => (selectedTheme === "dark" ? "dark" : "light");
  const getCurrentIcon = () =>
    selectedIcon === "bx bx-moon" ? "bx bx-moon" : "bx bx-sun";

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.current.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }
  }, [selectedTheme, selectedIcon, darkTheme, iconTheme]);

  const handleButtonClick = () => {
    setSelectedTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
    setSelectedIcon((currentIcon) =>
      currentIcon === "bx bx-moon" ? "bx bx-sun" : "bx bx-moon"
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    }
  }, [selectedTheme, selectedIcon]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY >= 50) {
      header.current.classList.add("scroll-header");
    } else {
      header.current.classList.remove("scroll-header");
    }
  }, [scrollY]);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity ?? 0);

  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const navToggle = () => {
    navMenu.current.classList.toggle("show-menu");
  };

  return (
    <div>
      {/* HEADER  */}
      <header className="header" id="header" ref={header}>
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="bx bxs-watch nav__logo-icon"></i> Rolex
          </a>

          <div className="nav__menu" id="nav-menu" ref={navMenu}>
            <ul className="nav__list">
              <li className="nav__item" onClick={navToggle}>
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item" onClick={navToggle}>
                <a href="#featured" className="nav__link">
                  Featured
                </a>
              </li>
              <li className="nav__item" onClick={navToggle}>
                <a href="#products" className="nav__link">
                  Products
                </a>
              </li>
              <li className="nav__item" onClick={navToggle}>
                <a href="#new" className="nav__link">
                  New
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={navToggle}>
              <i className="bx bx-x"></i>
            </div>
          </div>

          <div className="nav__btns">
            {/* Theme change button  */}
            <i
              className="bx bx-moon change-theme"
              id="theme-button"
              ref={themeButton}
              onClick={handleButtonClick}
            ></i>

            <div className="nav__shop" id="cart-shop" onClick={toggleCart}>
              <i className="bx bx-shopping-bag cart-bag"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={navToggle}>
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
