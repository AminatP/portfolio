import React from "react"
import skills from "../constants/skills"

const Skills = () => {
  return <section className="section bg-grey" id="skills">
    <div className="section-title">
      <h2>Technical Skills</h2>
      <div className="underline"></div>
    </div>
    <div className="section-center skills-center">
      {skills.map((skill)=>{
        const {id, title} = skill

        return <article key={id} className="skill">
          <h4>{title}</h4>
          <div className="underline"></div>
        </article>
      })}
    </div>
  </section>
}

export default Skills
