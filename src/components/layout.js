/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Navigation from "./navigation"
import SideNavigation from "./side-navigation"
import Footer from "./footer"

import "./layout.css"
import { links } from "../util"

const layoutContainerIndex = css`
  padding: 2vh 5vw;
  width: 70vw;
`

const layoutContainerPage = css`
  padding: 2vh 4vw 2vh 12vw;
  width: 98vw;
`

const mainContainerIndex = css`
  position: relative;
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
  useEffect(() => {
    links
      .filter(link => link.text !== page)
      .forEach(({ text }) => {
        const linkElem = document.querySelector(`#${text}`)

        if (linkElem) {
          linkElem.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }))
        }
      })
  })
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
      <Footer page={page} />
      <SideNavigation />
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
