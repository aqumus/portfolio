import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"

const descriptionStyle = ({ color, isSmallScreen }) => css`
  color: ${color};
  font-size: ${isSmallScreen ? "16px" : "22px"};
  line-height: ${isSmallScreen ? "20px" : "28px"};
  margin: 0 3vw;

  emphasis {
    font-weight: bold;
  }
`

export const Description = ({ renderDescription }) => {
  const { color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div
      css={descriptionStyle({ color, isSmallScreen })}
      className="experience-description"
      data-splitting="words"
    >
      {renderDescription()}
    </div>
  )
}
