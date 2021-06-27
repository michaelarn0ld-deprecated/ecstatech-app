import * as React from "react"
import { useState } from "react"
import "../styles/Navbar.scss"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  if (typeof window !== `undefined`) {
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth <= 500 ? setMobileView(true) : setMobileView(false),
      true
    )
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
        <div
          className={
            clicked
              ? "navbar-links-wrapper-visible"
              : "navbar-links-wrapper-hidden"
          }
        >
          Home
        </div>
        <div
          className={
            clicked
              ? "navbar-links-wrapper-visible"
              : "navbar-links-wrapper-hidden"
          }
        >
          Services
        </div>
        <div
          className={
            clicked
              ? "navbar-links-wrapper-visible"
              : "navbar-links-wrapper-hidden"
          }
        >
          Portfolio
        </div>
        <div
          className={
            clicked
              ? "navbar-links-wrapper-visible"
              : "navbar-links-wrapper-hidden"
          }
        >
          Blog
        </div>
        {mobileView && (
          <div
            className={
              clicked
                ? "navbar-links-wrapper-visible mobile-contact"
                : "navbar-links-wrapper-hidden mobile-contact"
            }
          >
            Let's Chat!
          </div>
        )}
      </div>
      <div className="navbar-contact">
        <div className="div">Let's Chat!</div>
      </div>
      <div className="navbar-menu-icon">
        <div className="navbar-menu-icon-burger">
          <div
            className={
              clicked
                ? "navbar-menu-icon-burger-active open"
                : "navbar-menu-icon-burger-active"
            }
            onClick={() => setClicked(!clicked)}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar