import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { FaGithub, FaHome } from "react-icons/fa"
import { Link } from "gatsby"
import projects from "../constants/projects"

const Projects = () => {
  return <section className="section projects">
    <Title title="Projects"/>
    <div className="section-center projects-center">
      {projects.map((project)=>{
        const {id, title, description} = project

        return <article key={id}>
          <h4>{title}</h4>
          <p>{description}</p>
        </article>
      })}
    </div>
  </section>
}

export default Projects
