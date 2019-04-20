import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>Name: Neil Berg</h1>
      <p>Budding front end developer</p>
      <Link to="/contact">Contact me!</Link>
    </Layout>
  )
}

export default About
