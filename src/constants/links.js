import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import resume from './resume/Aminat_Puebla_Resume.pdf'

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
    link.id === 3 ? (
      <li key={link.id}>
      <ul>
      <a href={resume} target="_blank" rel="noopener">Resume</a>
      </ul>
    </li>
    ) : (
      <li key={link.id}>
      <ul>
      <a onClick={() => scrollTo(`${link.url}`)}>{link.text}</a>
      </ul>
    </li>
    )
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
