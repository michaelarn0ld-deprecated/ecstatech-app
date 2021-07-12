import * as React from "react"
import "../styles/Index.scss"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Blog from "../components/Blog"

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
    </div>
  )
}

export default IndexPage
