import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { Link as GLink } from "gatsby"
import "../styles/Blog.scss"
import logo from "../images/logo.svg"
import linkedIn from "../images/blog/linkedin.svg"
import github from "../images/blog/github.svg"
import medium from "../images/blog/medium.svg"
import instagram from "../images/blog/instagram.svg"
import youtube from "../images/blog/youtube.svg"
import cppDs from "../images/blog/cppds.svg"
import chemE from "../images/blog/cheme.svg"
import craGatsby from "../images/blog/craGatsby.svg"
import Carousel from "react-elastic-carousel"

const Blog = () => {
  const blogPosts = [
    {
      category: "Computer Science",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Technology",
      title: "Leaping from Chemical Engineering to Software Development.",
      icon: chemE,
    },
    {
      category: "Web Development",
      title: "CRA vs Gatsby vs Next.js - Which is best for your next project?",
      icon: craGatsby,
    },
    // {
    //   category: "Techno",
    //   title: "C++ Data Structures - Stacks, queues, sets, and maps.",
    //   icon: cppDs,
    // },
    // {
    //   category: "Logy",
    //   title: "C++ Data Structures - Stacks, queues, sets, and maps.",
    //   icon: cppDs,
    // },
    // {
    //   category: "Tech",
    //   title: "C++ Data Structures - Stacks, queues, sets, and maps.",
    //   icon: cppDs,
    // },
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 620, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ]

  return (
    <div className="blog">
      <header>
        <h1>Latest blog posts</h1>
        <p>Sharing my software journey, one article at a time.</p>
      </header>
      <Carousel breakPoints={breakPoints}>
        {blogPosts.map(post => (
          <div className="blog-item">
            <p>{post.category}</p>
            <h1>{post.title}</h1>
            <img src={post.icon} alt="" />
            <button>Read Article</button>
          </div>
        ))}
      </Carousel>
      <footer>
        <section>
          <h1>Work With Me</h1>
          <p>
            Have a project for me? Let's schedule a chat and see if we'll make a
            good fit.
          </p>

          <GLink className="blog-cta" to="/contact">
            Get in touch
          </GLink>
        </section>
        <main>
          <div
            className="blog-footer-logo"
            onClick={() => scroll.scrollToTop()}
          >
            <img src={logo} alt="" />
            <div>
              <h1>ecsta</h1>
              <h2>tech</h2>
            </div>
          </div>
          <div className="blog-footer-social">
            <a
              href="https://www.linkedin.com/in/michaelarnoldcpp"
              target="_blank"
            >
              <img src={linkedIn} alt="" />
            </a>
            <a href="https://michaelarn0ld.medium.com/" target="_blank">
              <img src={medium} alt="" />
            </a>
            <a href="https://github.com/michaelarn0ld" target="_blank">
              <img src={github} alt="" />
            </a>
            <a href="https://www.instagram.com/ecstatechapps/" target="_blank">
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://m.youtube.com/channel/UC2CTdHvm_vlLMJ5f3B-Ggew/"
              target="_blank"
            >
              <img src={youtube} alt="" />
            </a>
          </div>
          <p>Designed and built by Michael Arnold &#169; 2021</p>
        </main>
      </footer>
    </div>
  )
}

export default Blog
