import * as React from "react"
import "../styles/Index.scss"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
    </div>
  )
}

export default IndexPage
