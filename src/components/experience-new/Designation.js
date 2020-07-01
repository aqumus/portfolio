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
  width: 30%;
  left: -30%;
  display: flex;
  justify-content: flex-end;
`

const designationText = css`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
`

export const Designation = ({ firstHalf, children }) => {
  const { color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={designationStyle}>
      <span css={[designationText, firstHalfStyle({ color })]}>
        {firstHalf}
      </span>
      <span css={designationText}>{children.replace(firstHalf, "")}</span>
    </div>
  )
}
