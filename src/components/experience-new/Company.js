import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const companyStyle = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`

const companyTextStyle = css`
  font-size: 100px;
  line-height: 100px;
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
    <div css={companyStyle}>
      <span css={[companyTextStyle, firstHalfStyle({ color })]}>
        <span>{firstHalf}</span>
      </span>
      <span css={companyTextStyle}>{children.replace(firstHalf, "")}</span>
    </div>
  )
}
