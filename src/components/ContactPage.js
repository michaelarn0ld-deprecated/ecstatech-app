import React from "react"
import { useState } from "react"
import { init, sendForm } from "emailjs-com"
import { Link as GLink } from "gatsby"
import { useForm } from "react-hook-form"
import "../styles/ContactPage.scss"
import logo from "../images/logo.svg"
import phone from "../images/contact/phone.svg"
import email from "../images/contact/email.svg"
import closeContact from "../images/contact/closecontact.svg"
import li from "../images/contact/contact-li.svg"
import md from "../images/contact/contact-md.svg"
import gh from "../images/contact/contact-gh.svg"
import ig from "../images/contact/contact-ig.svg"
import yt from "../images/contact/contact-yt.svg"
import formName from "../images/contact/formname.svg"
import formMail from "../images/contact/formmail.svg"
import success from "../images/contact/success.svg"
import failure from "../images/contact/failure.svg"

init("user_TNTFrlyie1bK82cVI2YDb")

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [successfulSubmit, setSuccessfulSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = data => {
    sendForm("default_service", "template_4uo07uk", "#contact-form").then(
      function (response) {
        setSuccessfulSubmit(true)
        setSubmitted(true)
        console.log("SUCCESS", response.status, response.text)
      },
      function (error) {
        setSuccessfulSubmit(false)
        setSubmitted(true)
        console.log("FAILED...", error)
      }
    )
    reset()
  }

  return (
    <div className="contact-page">
      {submitted && (
        <div className="contact-page-submitmsg">
          <div className="submit-success">
            <div
              style={
                successfulSubmit
                  ? { background: "#49c65e" }
                  : { background: "#FE6A6A" }
              }
            ></div>
            <img src={successfulSubmit ? success : failure} alt="" />
            <section>
              <h1>{successfulSubmit ? "Success" : "Failed"}</h1>
              <p>
                {successfulSubmit
                  ? "your message has been sent"
                  : "please try again later"}
              </p>
            </section>
            <button
              style={
                successfulSubmit
                  ? { background: "#49c65e" }
                  : { background: "#FE6A6A" }
              }
              onClick={() => setSubmitted(false)}
            >
              close
            </button>
          </div>
        </div>
      )}
      <header>
        <img src={logo} alt="" />
        <GLink to="/" className="contact-page-back">
          <img src={closeContact} alt="" />
        </GLink>
      </header>
      <main>
        <section>
          <article>
            <h1>Get in touch!</h1>
            <p>
              Have a project or just want to chat? Reach out to me and I'll get
              back to you within 24 hours.
            </p>
          </article>
          <div>
            <img src={phone} alt="" />
            <h2>(951) 768-2490</h2>
          </div>
          <div>
            <img src={email} alt="" />
            <h2>michael@ecstatech.com</h2>
          </div>
          <nav>
            <a href="">
              <img src={li} alt="" />
            </a>
            <a href="">
              <img src={md} alt="" className="contact-page-medium" />
            </a>
            <a href="">
              <img src={gh} alt="" />
            </a>
            <a href="">
              <img src={ig} alt="" />
            </a>
            <a href="">
              <img src={yt} alt="" />
            </a>
          </nav>
        </section>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Your Name</label>
            <div>
              <img src={formName} alt="" />
              <input
                name="username"
                type="text"
                className="form-name"
                {...register("username", { required: true })}
              />
            </div>
            {errors.username && <p>Please enter a name</p>}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <div>
              <img src={formMail} alt="" />
              <input
                name="email"
                type="text"
                className="form-email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
            </div>
            {errors.email && <p>Please enter a valid email address</p>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message here"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <p>Please enter a message</p>}
          </div>
          <button type="submit">Let's Connect</button>
        </form>
      </main>
    </div>
  )
}

export default ContactPage
