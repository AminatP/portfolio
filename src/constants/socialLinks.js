import React from "react"
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai';

const data = [
  {
    id: 1,
    icon: <AiFillLinkedin className="social-icon"></AiFillLinkedin>,
    url: "https://www.linkedin.com/in/aminat-puebla/",
  },
  {
    id: 2,
    icon: <AiFillGithub className="social-icon"></AiFillGithub>,
    url: "https://github.com/AminatP",
  },
  {
    id: 3,
    icon: <AiFillMail className="social-icon"></AiFillMail>,
    url: "mailto: amina1502@gmail.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
