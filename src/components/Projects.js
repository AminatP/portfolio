import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import projects from "../constants/projects"

const query = graphql`
  {
    file(relativePath: {eq: "projects-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Projects = () => {
  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query);
  return <section className="section projects">
    <Title title="Projects"/>
    <div className="section-center projects-center">
      {projects.map((project)=>{
        const {id, title, description, stack, github, url} = project

        return <article key={id} className="project">
          <Image fluid={fluid} className="project-img"/>
          <div className="project-info">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
            <div className="project-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <div className="project-links">
              <a href={github}>
                <FaGithubSquare className="project-icon"/>
              </a>
              <a href={url}>
                <FaShareSquare className="project-icon"/>
              </a>
            </div>
          </div>
        </article>
      })}
    </div>
  </section>
}

export default Projects
