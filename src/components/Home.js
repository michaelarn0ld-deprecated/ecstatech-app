import * as React from "react"
import "../styles/Home.scss"
import hero from "../images/hero-graphic.svg"
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div className="home">
      <div className="home-circle-one"></div>
      <div className="home-circle-two"></div>
      <div className="home-circle-three"></div>
      <div className="home-hero">
        <div className="home-hero-subtitle">software made for you</div>
        <div className="home-hero-description">
          I create web & mobile applications that are
        </div>
        <div className="home-hero-description keyword">
          <Typewriter
            options={{
              strings: [
                "interactive",
                "converting",
                "scalable",
                "intuitive",
                "successful",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="home-hero-action">
          <Link className="home-hero-action-link" to="portfolio" smooth={true}>
            See my work
          </Link>
        </div>
      </div>
      <div className="home-graphic">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home
