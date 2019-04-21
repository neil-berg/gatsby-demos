import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Head from "../components/head"
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const renderPostList = data.allMarkdownRemark.edges.map((edge, i) => {
    return (
      <li key={i}>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <h2>{edge.node.frontmatter.title}</h2>
        </Link>
        <p>{edge.node.frontmatter.date}</p>
      </li>
    )
  })
  return (
    <Layout>
      <Head title="Berg's Words" />
      <ul>{renderPostList}</ul>
    </Layout>
  )
}

export default Blog
