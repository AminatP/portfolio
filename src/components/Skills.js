import React from "react"
import Title from "./Title"
import skills from "../constants/skills"
const Skills = () => {
  return <section className="section bg-grey" id="skills">
    <Title title="Technical Skills"/>
    <div className="section-center services-center">
      {skills.map((skill)=>{
        const {id, title} = skill

        return <article key={id} className="service">
          <h4>{title}</h4>
          <div className="underline"></div>
        </article>
      })}
    </div>
  </section>
}

export default Skills
