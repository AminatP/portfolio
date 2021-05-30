import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
export default () => {
  return <Layout>
    <HomePage />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
}
// ...GatsbyImageSharpFluid
