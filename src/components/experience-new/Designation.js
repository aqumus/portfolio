import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const designationStyle = css`
  display: flex;
  flex-direction: row;
`

const firstHalfStyle = ({ color }) => css`
  color: ${color};
  position: absolute;
  width: 35%;
  left: -35%;
  display: flex;
  justify-content: flex-end;
`

const designationText = isSmallScreen => css`
  font-size: ${isSmallScreen ? "18px" : "40px"};
  line-height: ${isSmallScreen ? "18px" : "40px"};
  font-weight: bold;
`

export const Designation = ({ firstHalf, children }) => {
  const { color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={designationStyle} className="experience-designation">
      <span
        css={[designationText(isSmallScreen), firstHalfStyle({ color })]}
        data-splitting="chars"
      >
        {firstHalf}
      </span>
      <span css={designationText(isSmallScreen)} data-splitting="chars">
        {children.replace(firstHalf, "")}
      </span>
    </div>
  )
}
