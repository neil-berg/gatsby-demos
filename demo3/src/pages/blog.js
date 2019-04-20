import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            timeToRead
          }
        }
      }
    }
  `)

  const renderPostList = data.allMarkdownRemark.edges.map((item, i) => {
    return (
      <li key={i}>
        <h2>{item.node.frontmatter.title}</h2>
        <p>
          {item.node.frontmatter.date}
          <span> Time to read: {item.node.timeToRead} mins</span>
        </p>
      </li>
    )
  })
  return (
    <Layout>
      <ul>{renderPostList}</ul>
    </Layout>
  )
}

export default Blog
