import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  list-style-type: none;
  background: goldenrod;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  color: ${props => (props.selected ? "red" : "white")};
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <NavContainer>
          <li>
            <StyledLink to="/" selected>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
          </li>
        </NavContainer>
      </nav>
    </header>
  )
}

export default Header
