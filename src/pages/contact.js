import React from "react"
import { useEffect } from "react"
import { gsap } from "gsap"
import ContactPage from "../components/ContactPage"

const Contact = () => {
  useEffect(() => {
    gsap.to(".contact-page > header", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "back.out(2)",
    })
    gsap.to(".contact-page > main", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "back.out(2)",
    })
  }, [])

  return <ContactPage />
}

export default Contact
