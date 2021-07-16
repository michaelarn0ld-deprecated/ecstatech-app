import React from "react"
import devoted from "../images/about/devoted.svg"
import dataDriven from "../images/about/datadriven.svg"
import transparent from "../images/about/transparent.svg"
import reliable from "../images/about/reliable.svg"
import howHelp from "../images/about/howihelp.svg"
import whoHelp from "../images/about/whoihelp.svg"
import profile from "../images/about/profile.jpg"
import "../styles/About.scss"

const About = () => {
  return (
    <div className="aboutpage">
      <header>
        <main>
          <h2>my vision</h2>
          <h1>
            Your applications should convert more customers and keep your
            business running smoothly.
          </h1>
        </main>
        <div></div>
      </header>
      <section>
        <div>
          <img src={profile} alt="" />
          <p>
            Tech nerd and analytical problem solver; I am a software developer,
            engineering enthusiast, and first principles thinker.
          </p>
          <h2>Michael Arnold</h2>
        </div>
        <article>
          <h2>my mission</h2>
          <h1>
            Optimizing my clients’ conversion through performative code and
            amazing user experiences.
          </h1>
          <button>My Resume</button>
        </article>
      </section>
      <div className="aboutpage-values">
        <h1>My core values define my identity.</h1>
        <p>
          I put relationships with my clients first. Your project deserves
          carefully engineered attention to detail, and that’s where I come in.
          My priority is to provide you with the best customer experience from
          end to end of your project.
        </p>
        <main>
          <div>
            <img src={devoted} alt="" />
            <h2>devoted</h2>
            <p>
              By focusing on quality over quantity, I ensure that I am
              passionate about your vision.
            </p>
          </div>
          <div>
            <img src={dataDriven} alt="" />
            <h2>data driven</h2>
            <p>
              I develop apps with a user-first approach, applying data insights
              to secure your project's success.
            </p>
          </div>
          <div>
            <img src={transparent} alt="" />
            <h2>transparent</h2>
            <p>
              Tranparency and communication are my promise to provide you with a
              hassle-free experience.
            </p>
          </div>
          <div>
            <img src={reliable} alt="" />
            <h2>reliable</h2>
            <p>
              I stand behind my product and am ready to tackle the changing
              demands of your project.
            </p>
          </div>
        </main>
      </div>
      <div className="aboutpage-content">
        <section>
          <div className="aboutpage-content-imgone">
            <h1>How I Help</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </div>
          </div>
          <img className="aboutpage-content-one" src={howHelp} alt="" />
        </section>
        <section>
          <div className="aboutpage-content-two">
            <h1>Who I Help</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
              <article>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </div>
          </div>
          <img className="aboutpage-content-imgtwo" src={whoHelp} alt="" />
        </section>
      </div>
    </div>
  )
}

export default About
