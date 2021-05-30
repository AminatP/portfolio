import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const data = [
  {
    id: 1,
    text: "skills",
    url: "#skills",
  },
  {
    id: 2,
    text: "projects",
    url: "#projects",
  },
  {
    id: 3,
    text: "resume",
    url: "resume",
  },
  {
    id: 4,
    text: "contact",
    url: "#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <ul onClick={() => scrollTo(`${link.url}`)}>{link.text}</ul>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
