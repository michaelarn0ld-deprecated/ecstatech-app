import React from "react"
import { useState } from "react"
import Modal from "react-modal"
import "../styles/Services.scss"
import webdev from "../images/webdev.svg"
import mobiledev from "../images/mobiledev.svg"
import dataviz from "../images/dataviz.svg"
import automate from "../images/automate.svg"

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalState, setModalState] = useState("")
  const customStyles = {
    overlay: { zIndex: 1000 },
  }
  const modalContent = {
    webDev: {
      p: "Hello, World!",
      q: "Here's some dummy text",
    },
  }

  return (
    <div className="services">
      <Modal isOpen={modalOpen} style={customStyles}>
        <button onClick={() => setModalOpen(!modalOpen)}>{modalState.p}</button>
        <div>{modalState.q}</div>
      </Modal>
      <div className="services-text">
        <h1>How can we help you?</h1>
        <p>Here's a list of the services we offer</p>
      </div>
      <div className="services-glass">
        <div className="services-glass-item one">
          <img src={webdev} alt="" />
          <h2>Web Development</h2>
          <p>
            Need a website? We develop quick and converting web applications
            that look great on all devices.
          </p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen)
              setModalState(modalContent.webDev)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item two">
          <img src={mobiledev} alt="" />
          <h2>Mobile Apps</h2>
          <p>
            Need an app? Our mobile applications deliver a seamless user
            experience to your target audience.
          </p>
          <button>Learn More</button>
        </div>
        <div className="services-glass-item three">
          <img src={dataviz} alt="" />
          <h2>Data Analytics</h2>
          <p>
            Got data? We leverage the latest tools to transform data into
            actionable insights for your business.
          </p>
          <button>Learn More</button>
        </div>
        <div className="services-glass-item four">
          <img src={automate} alt="" />
          <h2>Automation</h2>
          <p>
            Repetitive tasks? We'll automate your workflow so you can spend more
            time on what matters most.
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
