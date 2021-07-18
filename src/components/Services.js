import React from "react"
import { useState } from "react"
import { Link as GLink } from "gatsby"
import Modal from "react-modal"
import modalContent from "./modalContent"
import "../styles/Modal.scss"
import "../styles/Services.scss"
import webdev from "../images/webdev.svg"
import mobiledev from "../images/mobiledev.svg"
import dataviz from "../images/dataviz.svg"
import automate from "../images/automate.svg"
import times from "../images/modal/modal-icons/times.svg"

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalState, setModalState] = useState(modalContent.webDev)

  const modalIconStyles = {
    one: {
      gridTemplateColumns: "1fr",
    },
    two: {
      gridTemplateColumns: "1fr 1fr",
    },
    three: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  }

  return (
    <div className="services">
      <Modal
        isOpen={modalOpen}
        closeTimeoutMS={300}
        onRequestClose={() => setModalOpen(!modalOpen)}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <figure>
          <img
            className="modal-content-close"
            onClick={() => setModalOpen(!modalOpen)}
            src={times}
            alt=""
          />
        </figure>

        <figrue className="modal-content-logo">
          <img src={modalState.logo} alt="" />
        </figrue>
        <main>
          <h1>{modalState.title}</h1>
          <p>{modalState.content}</p>
        </main>
        <section>
          <h2>Problems solved</h2>
          <ul>
            {modalState.problems.map((item, index) => {
              return (
                <li key={index}>
                  <div></div>
                  <p>{item}</p>
                </li>
              )
            })}
          </ul>
        </section>
        <div>
          <h2>Technologies used</h2>
          <div>
            <div>
              <ul style={modalIconStyles[modalState.format]}>
                {modalState.icons.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{item[0]}</p>
                      <img src={item[1]} alt="" />
                    </li>
                  )
                })}
              </ul>
            </div>
            <section>
              <button>
                <GLink className="modal-content-button" to="/contact">
                  Start a project
                </GLink>
              </button>
            </section>
          </div>
        </div>
      </Modal>
      <div className="services-text">
        <h1>Build your dream project today</h1>
        <p>Here's a list of the services I offer</p>
      </div>
      <div className="services-glass">
        <div className="services-glass-item one">
          <img src={webdev} alt="" />
          <h2>Web Development</h2>
          <p>
            Need a website? I develop quick and converting web applications that
            look great on all devices.
          </p>
          <button
            onClick={() => {
              setModalState(modalContent.webDev)
              setTimeout(() => setModalOpen(!modalOpen), 100)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item two">
          <img src={mobiledev} alt="" />
          <h2>Mobile Apps</h2>
          <p>
            Need an app? My mobile applications deliver a seamless user
            experience to your target audience.
          </p>
          <button
            onClick={() => {
              setModalState(modalContent.mobileDev)
              setTimeout(() => setModalOpen(!modalOpen), 100)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item three">
          <img src={dataviz} alt="" />
          <h2>Data Analytics</h2>
          <p>
            Got data? I leverage the latest tools to transform data into
            actionable insights for your business.
          </p>
          <button
            onClick={() => {
              setModalState(modalContent.dataAnaltyics)
              setTimeout(() => setModalOpen(!modalOpen), 100)
            }}
          >
            Learn More
          </button>
        </div>
        <div className="services-glass-item four">
          <img src={automate} alt="" />
          <h2>Automation</h2>
          <p>
            Repetitive tasks? I'll automate your workflow so you can spend more
            time on what matters most.
          </p>
          <button
            onClick={() => {
              setModalState(modalContent.automation)
              setTimeout(() => setModalOpen(!modalOpen), 100)
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Services
