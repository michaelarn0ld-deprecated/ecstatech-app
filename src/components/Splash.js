import React from "react"
import { useEffect } from "react"
import { gsap } from "gsap"
import "../styles/Splash.scss"
import logo from "../images/logo.svg"

const Splash = () => {
  useEffect(() => {
    gsap.to(".splash-ecsta", {
      y: 0,
      duration: 1,
      ease: "bounce.out",
      delay: 0.3,
    })
    gsap.to(".splash-ecsta", {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
      delay: 0.3,
    })
    gsap.to(".splash-tech", {
      y: 0,
      duration: 1,
      ease: "bounce.out",
      delay: 0.6,
    })
    gsap.to(".splash-tech", {
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
      delay: 0.6,
    })
    gsap.to(".splash-ctnr", {
      y: 130,
      duration: 1,
      ease: "power3.inOut",
      delay: 1.5,
    })
    gsap.to(".splash > div > img", {
      opacity: 1,
      duration: 1,
      delay: 2.5,
    })
    gsap.to(".splash > div", {
      opacity: 0,
      duration: 0.5,
      delay: 4.5,
    })
    gsap.to(".splash", {
      opacity: 0,
      duration: 0.5,
      delay: 5.2,
    })
    gsap.to(".splash", {
      y: "-100vh",
      duration: 0.1,
      delay: 5.7,
    })
  }, [])
  return (
    <div className="splash">
      <div>
        <img src={logo} alt="" />
        <div className="splash-ctnr">
          <h1 className="splash-ecsta">ecsta</h1>
          <h1 className="splash-tech">tech</h1>
        </div>
      </div>
    </div>
  )
}

export default Splash
