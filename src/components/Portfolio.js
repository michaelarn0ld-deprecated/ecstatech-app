import React from "react"
import "../styles/Portfolio.scss"
import webApp from "../images/portfolio/webappportfolio.svg"
import mobileApp from "../images/portfolio/mobileappportfolio.svg"
import dataApp from "../images/portfolio/dataappportfolio.svg"
import autoApp from "../images/portfolio/autoappportfolio.svg"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Portfolio Showcase</h1>
        <p>Check out some of our featured work</p>
      </header>
      <main>
        <section>
          <div className="portfolio-section-one">
            <h2>Web App</h2>
            <h1>Crypto Genie</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum iure iste itaque magni officia maiores nemo non facilis
              nulla sint recusandae aperiam molestiae laboriosam vel voluptate
              ex officiis, consequuntur quis fugiat. Animi minima magnam
              expedita!
            </p>
            <button>View Project</button>
          </div>
          <img className="portfolio-image-one" src={webApp} alt="" />
        </section>
        <section>
          <div className="portfolio-section-two">
            <h2>Mobile App</h2>
            <h1>Kinetech</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum iure iste itaque magni officia maiores nemo non facilis
              nulla sint recusandae aperiam molestiae laboriosam vel voluptate
              ex officiis, consequuntur quis fugiat. Animi minima magnam
              expedita!
            </p>
            <button>View Project</button>
          </div>
          <img className="portfolio-image-two" src={mobileApp} alt="" />
        </section>
        <section>
          <div className="portfolio-section-one">
            <h2>Data Dashboard</h2>
            <h1>Business Insights</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum iure iste itaque magni officia maiores nemo non facilis
              nulla sint recusandae aperiam molestiae laboriosam vel voluptate
              ex officiis, consequuntur quis fugiat. Animi minima magnam
              expedita!
            </p>
            <button>View Project</button>
          </div>
          <img className="portfolio-image-one" src={dataApp} alt="" />
        </section>
        <section>
          <div className="portfolio-section-two">
            <h2>Google Workspace</h2>
            <h1>Easy Workflow</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              harum iure iste itaque magni officia maiores nemo non facilis
              nulla sint recusandae aperiam molestiae laboriosam vel voluptate
              ex officiis, consequuntur quis fugiat. Animi minima magnam
              expedita!
            </p>
            <button>View Project</button>
          </div>
          <img className="portfolio-image-two" src={autoApp} alt="" />
        </section>
      </main>
    </div>
  )
}

export default Portfolio
