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
            Driving my clients’ conversion through performative code and amazing
            user experiences
          </h1>
        </main>
        <div></div>
      </header>
      <section>
        <div>
          <img src={profile} alt="" />
          <p>
            Tech nerd and problem solver; I am a software developer, engineering
            enthusiast, and first principles thinker.
          </p>
          <h2>Michael Arnold</h2>
        </div>
        <article>
          <h2>my mission</h2>
          <h1>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </h1>
          <button>Resume / CV</button>
        </article>
      </section>
      <div className="aboutpage-values">
        <h1>My core values reflect my work</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores
        </p>
        <main>
          <div>
            <img src={devoted} alt="" />
            <h2>devoted</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
          <div>
            <img src={dataDriven} alt="" />
            <h2>data driven</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
          <div>
            <img src={transparent} alt="" />
            <h2>transparent</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
          <div>
            <img src={reliable} alt="" />
            <h2>reliable</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
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
