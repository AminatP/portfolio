import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomePage from "../components/HomePage"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
export default () => {
  return <Layout>
    <HomePage/>
    <Skills/>
    <Projects/>
  </Layout>
}
// ...GatsbyImageSharpFluid
