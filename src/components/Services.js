import React from "react"
import "../styles/Services.scss"
import webdev from "../images/webdev.svg"
import mobiledev from "../images/mobiledev.svg"
import dataviz from "../images/dataviz.svg"
import automate from "../images/automate.svg"

const Services = () => {
  return (
    <div className="services">
      <div className="services-text">
        <h1>How can we help you?</h1>
        <p>Here's a list of the services we offer</p>
      </div>
      <div className="services-glass">
        <div className="services-glass-item one">
          <img src={webdev} alt="" />
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum eligendi dolorem?
          </p>
          <button>Learn More</button>
        </div>
        <div className="services-glass-item two">
          <img src={mobiledev} alt="" />
          <h2>Mobile Apps</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum eligendi dolorem?
          </p>
          <button>Learn More</button>
        </div>
        <div className="services-glass-item three">
          <img src={dataviz} alt="" />
          <h2>Data Analytics</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum eligendi dolorem?
          </p>
          <button>Learn More</button>
        </div>
        <div className="services-glass-item four">
          <img src={automate} alt="" />
          <h2>Automation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum eligendi dolorem?
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Services
