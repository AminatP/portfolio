import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import projects from "../constants/projects"

const pageQuery = graphql `
  query {
    projectImg: allFile(filter: {extension: {regex: "/(jpg)/"}}, sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const Projects = () => {
  const {projectImg:{edges}} = useStaticQuery(pageQuery)
  const info = edges.map(image => {
    return image.node.childImageSharp.fluid
  })
  return <section className="section projects" id="projects">
    <div className="section-title">
      <h2>Projects</h2>
      <div className="underline"></div>
    </div>
    <div className="section-center projects-center">
      {projects.map((project)=>{
        const {id, title, description, stack, github, url, idx} = project

        return <article key={id} className="project">
          <Image fluid={info[idx]} className="project-img"/>
          <div className="project-info">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
            <div className="project-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <div className="project-links">
              <a href={github} target="_blank">
                <FaGithubSquare className="project-icon"/>
              </a>
              <a href={url} target="_blank">
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
