import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"
import Palette from "../../palette"

const durationStyle = ({ background, color, isSmallScreen }) => css`
  position: absolute;
  right: 0;
  top: ${isSmallScreen ? "7vh" : "12vh"};
  width: auto;
  height: ${isSmallScreen ? "auto" : "75px"};
  padding: ${isSmallScreen ? "2vh 3vw" : "25px"};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${background};
  color: ${color};
  font-weight: bold;
  font-size: ${isSmallScreen ? "18px" : "35px"};
  writing-mode: ${isSmallScreen ? "vertical-lr" : "inherit"};
`

const endDuration = ({ end }) => css`
  color: ${end === "Current" ? Palette.MEDIUM : "inherit"};
`

export const Duration = ({ children }) => {
  const { background, color } = useContext(ExperienceContext)
  const isSmallScreen = useSmallScreenMediaQuery()
  const start = children.split("-")[0].trim()
  const end = children.split("-")[1].trim()

  return (
    <div css={durationStyle({ background, color, isSmallScreen })}>
      <span>{start}</span>
      &nbsp;
      <span>{"-"}</span>
      &nbsp;
      <span css={endDuration({ end })}>{end}</span>
    </div>
  )
}
