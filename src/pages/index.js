import * as React from "react"
import "../styles/Index.scss"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Services from "../components/Services"

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  )
}

export default IndexPage
