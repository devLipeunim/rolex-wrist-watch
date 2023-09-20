"use client";
import { useEffect, useState } from "react";
const Footer = () => {
  const [sections, setSections] = useState([]);
  const [scrollY, setScrollY] = useState(0);

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
    const sections = Array.from(document.querySelectorAll("section[id]"));
    setSections(sections);
  }, []);

  useEffect(() => {
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionsClass = document.querySelector(
        `.nav__menu a[href*='${sectionId}']`
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  }, [scrollY]);

  useEffect(() => {
    const scrollUp = document.getElementById("scroll-up");

    if (scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }, [scrollY]);

  return (
    <div>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <h3 className="footer__title">Our information</h3>

            <ul className="footer__list">
              <li>1234 - Peru</li>
              <li>La Libertad 43210</li>
              <li>123-456-789</li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">About Us</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Copy Right
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Product</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Road bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Mountain bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Electric
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </ul>
          </div>
        </div>

        <span className="footer__copy">
          &#169; LipeunimCodes. All rights reserved
        </span>
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  );
};

export default Footer;
