import React from "react"
import "../styles/Portfolio.scss"
import webApp from "../images/portfolio/webappportfolio.svg"
import mobileApp from "../images/portfolio/mobileappportfolio.svg"
import dataApp from "../images/portfolio/dataappportfolio.svg"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Portfolio Showcase</h1>
        <p>Check out some of my featured work</p>
      </header>
      <main>
        <section>
          <div className="portfolio-section-one">
            <h2>Full Stack Application</h2>
            <h1>Employee Management</h1>
            <p>
              This employee management application is a fullstack project built with PHP Laravel, MySQL, Bootstrap, and Vue.js. Users must go through resgistration and authentication to access the functionality of the app. The application implements the MVC design pattern to handle system management, user management, and employee management. 
            </p>
            <a href="http://crudemployeemanagement.herokuapp.com/" target="_blank">View Project</a>
          </div>
          <img className="portfolio-image-one" src={webApp} alt="" />
        </section>
        <section>
          <div className="portfolio-section-two">
            <h2>Frontend Application</h2>
            <h1>Weather Forecasting</h1>
            <p>
              This project is frontend application built with React that displays current and forecasted weather data utilizing
              functional components and hooks. It implements the fetch api to query data from www.weatherapi.com and display it to the UI based
              on user input from form submissions.
            </p>
            <a href="https://michaelarn0ld.github.io/weather-app/" target="_blank">View Project</a>
          </div>
          <img className="portfolio-image-two" src={mobileApp} alt="" />
        </section>
        <section>
          <div className="portfolio-section-one">
            <h2>Data Structures & Algorithms</h2>
            <h1>Pathfinding Application</h1>
            <p>
              The inspiration for this project was to explore graph traversal and the infamous "Traveling Salesman Problem". Users create a grid of nodes where there is a defined starting and ending point and the application uses an algorithm to determine the shortest path to visit all nodes. This was created using React and by implementing concepts from the BFS algorithm.
            </p>
            <a href="https://michaelarn0ld.github.io/pathfinder-app/" target="_blank">View Project</a>
          </div>
          <img className="portfolio-image-one" src={dataApp} alt="" />
        </section>
      </main>
    </div>
  )
}

export default Portfolio
