import * as React from "react"
import { useState, useEffect } from "react"
import "../styles/Navbar.scss"
import logo from "../images/logo.svg"
import { Link } from "react-scroll"
import { Link as GLink } from "gatsby"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.innerWidth <= 500 && setMobileView(true)
    }
  }, [])
  if (typeof window !== `undefined`) {
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth <= 500 ? setMobileView(true) : setMobileView(false),
      true
    )
  }

  const lockMobileScroll = () => {
    document.body.classList.toggle("lock-scroll")
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <div className="ecsta">ecsta</div>
        <div className="tech">tech</div>
      </div>
      <div
        className={
          clicked ? "navbar-links-wrapper active" : "navbar-links-wrapper"
        }
      >
        <div>
          <Link
            id="nav-links"
            className={
              clicked
                ? "navbar-links-wrapper-visible"
                : "navbar-links-wrapper-hidden"
            }
            to="aboutpage"
            duration={1000}
            smooth={true}
            onClick={() => {
              mobileView && lockMobileScroll()
              setClicked(false)
            }}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            id="nav-links"
            className={
              clicked
                ? "navbar-links-wrapper-visible"
                : "navbar-links-wrapper-hidden"
            }
            to="services"
            duration={1000}
            smooth={true}
            onClick={() => {
              mobileView && lockMobileScroll()
              setClicked(false)
            }}
          >
            Services
          </Link>
        </div>
        <div>
          <Link
            id="nav-links"
            className={
              clicked
                ? "navbar-links-wrapper-visible"
                : "navbar-links-wrapper-hidden"
            }
            to="portfolio"
            duration={1000}
            smooth={true}
            onClick={() => {
              mobileView && lockMobileScroll()
              setClicked(false)
            }}
          >
            Portfolio
          </Link>
        </div>
        <div>
          <Link
            id="nav-links"
            className={
              clicked
                ? "navbar-links-wrapper-visible"
                : "navbar-links-wrapper-hidden"
            }
            to="blog"
            smooth={true}
            onClick={() => {
              mobileView && lockMobileScroll()
              setClicked(false)
            }}
          >
            Blog
          </Link>
        </div>
        {mobileView && (
          <div>
            <GLink
              className={
                clicked
                  ? "navbar-links-wrapper-visible mobile-contact"
                  : "navbar-links-wrapper-hidden mobile-contact"
              }
              to="/contact"
              onClick={() => lockMobileScroll()}
            >
              Say Hello
            </GLink>
          </div>
        )}
      </div>
      <div className="navbar-contact">
        <div>
          <GLink className="navbar-contact-link" to="/contact">
            Say Hello
          </GLink>
        </div>
      </div>
      <div className="navbar-menu-icon">
        <div className="navbar-menu-icon-burger">
          <div
            className={
              clicked
                ? "navbar-menu-icon-burger-active open"
                : "navbar-menu-icon-burger-active"
            }
            onClick={() => {
              setClicked(!clicked)
              lockMobileScroll()
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
