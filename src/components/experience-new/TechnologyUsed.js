import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const technologyUsedStyle = ({ color, background }) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${background};
  color: ${color};
  width: 80%;
  height: 25%;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 3vw;
`

const headingStyle = css`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 15px;
`

export const TechnologyUsed = ({ children }) => {
  const { background, color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={technologyUsedStyle({ color: background, background: color })}>
      <div css={headingStyle}>Technology Used:</div>
      {children}
    </div>
  )
}
