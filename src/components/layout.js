/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Navigation from "./navigation"
import SideNavigation from "./side-navigation"

import "./layout.css"

const layoutContainerIndex = css`
  padding: 2vh 2vw;
  width: 72vw;
`

const layoutContainerPage = css`
  padding: 2vh 3vw;
  width: 91vw;
`

const mainContainerIndex = css`
  display: flex;
  flex-direction: row;
  padding: 5vh 5vw;
`

const mainContainerPage = css`
  display: flex;
  flex-direction: row;
  padding: 5vh 2vw;
`

const Layout = ({ children, page }) => {
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
    <div css={[mainContainerIndex, page && mainContainerPage]}>
      {page ? <SideNavigation /> : <Navigation />}
      <div css={[layoutContainerIndex, page && layoutContainerPage]}>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
