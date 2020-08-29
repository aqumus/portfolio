import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const technologyUsedStyle = ({ color, background, isSmallScreen }) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${background};
  color: ${color};
  width: 80%;
  height: 22%;
  font-size: ${isSmallScreen ? "16px" : "22px"};
  line-height: ${isSmallScreen ? "20px" : "28px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3vw;
`

const headingStyle = css`
  font-weight: bold;
  margin-bottom: 15px;
`

export const TechnologyUsed = ({ children }) => {
  const { secondBackground, color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div
      css={technologyUsedStyle({
        color,
        background: secondBackground,
        isSmallScreen,
      })}
    >
      <div css={headingStyle}>Technology Used:</div>
      {children}
    </div>
  )
}
