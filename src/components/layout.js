/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "./footer"

import "./layout.css"
import { links } from "../util"

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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {children}
      <Footer page={page} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
