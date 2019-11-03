import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import GithubIcon from "./github-icon"
import LinkedInIcon from "./linkedin-icon"
import EmailIcon from "./email-icon"

const sideFooter = isSmallScreen => css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 15vh;
  min-height: ${isSmallScreen ? "75px" : "110px"};
  max-height: ${isSmallScreen ? "90px" : "150px"};
  position: fixed;
  bottom: 1vh;
  right: 8px;
  opacity: 0.8;
`

const indexFooter = isSmallScreen => css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20vw;
  min-width: ${isSmallScreen ? "75px" : "150px"};
  max-width: ${isSmallScreen ? "90px" : "200px"};
  position: fixed;
  bottom: ${isSmallScreen ? "10vh" : "15vh"};
  left: 7vw;
  opacity: 0.8;
`

const Footer = ({ page }) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const size = isSmallScreen ? "12px" : "30px"
  return (
    <footer css={page ? sideFooter(isSmallScreen) : indexFooter(isSmallScreen)}>
      <GithubIcon size={size} />
      <LinkedInIcon size={size} />
      <EmailIcon size={size} />
    </footer>
  )
}

export default Footer
