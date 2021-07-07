import React from "react"
import "../styles/Blog.scss"
import cppDs from "../images/blog/cppds.svg"
import Carousel from "react-elastic-carousel"

const Blog = () => {
  const blogPosts = [
    {
      category: "Technology",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Technology",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Technology",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Techno",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Logy",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
    {
      category: "Tech",
      title: "C++ Data Structures - Stacks, queues, sets, and maps.",
      icon: cppDs,
    },
  ]

  /*
  at 1200 px -> 2 rows
  at 760 -> 1 rows
  */

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 560, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ]

  return (
    <div className="blog">
      <header>
        <h1>Not your average blog</h1>
        <p>Read our latest content on tech</p>
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
    </div>
  )
}

export default Blog
