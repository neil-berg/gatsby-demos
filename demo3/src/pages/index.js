import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Home page for {data.site.siteMetadata.author}</h1>
    </Layout>
  )
}

export default Home
