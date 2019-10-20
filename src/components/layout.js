/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Navigation from "./navigation"

import Header from "./header"
import "./layout.css"

const LayoutContainer = styled.div`
  padding: 2vh 2vw;
  width: 72vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5vh 5vw;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Navigation />
      <LayoutContainer>{children}</LayoutContainer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
