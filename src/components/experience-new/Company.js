import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const companyStyle = isSmallScreen => css`
  display: flex;
  flex-direction: row;
  margin-bottom: ${isSmallScreen ? "15px" : "25px"};
`

const companyTextStyle = isSmallScreen => css`
  font-size: ${isSmallScreen ? "50px" : "100px"};
  line-height: ${isSmallScreen ? "50px" : "100px"};
  font-weight: bold;
`

const firstHalfStyle = ({ color }) => css`
  color: ${color};
  position: absolute;
  width: 25%;
  left: -25%;
  display: flex;
  justify-content: flex-end;
`

export const Company = ({ firstHalf, children }) => {
  const { background, color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={companyStyle(isSmallScreen)} className="experience-company">
      <span css={[companyTextStyle(isSmallScreen), firstHalfStyle({ color })]}>
        <span data-splitting="chars">{firstHalf}</span>
      </span>
      <span css={companyTextStyle(isSmallScreen)} data-splitting="chars">
        {children.replace(firstHalf, "")}
      </span>
    </div>
  )
}
