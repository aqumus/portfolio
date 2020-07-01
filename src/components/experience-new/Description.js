import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const descriptionStyle = ({ color }) => css`
  color: ${color};
  font-size: 22px;
  line-height: 28px;
  margin: 0 5vw;

  emphasis {
    font-size: 30px;
    font-weight: bold;
  }
`

export const Description = ({ renderDescription }) => {
  const { background } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={descriptionStyle({ color: background })}>
      {renderDescription()}
    </div>
  )
}
