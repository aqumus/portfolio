import React, { useContext } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContext } from "./ExperienceContext"
import Palette from "../../palette"

const durationStyle = ({ background, color }) => css`
  position: relative;
  right: -5%;
  top: 15%;
  width: 400px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${background};
  color: ${color};
  font-weight: bold;
  font-size: 35px;
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
    <div css={durationStyle({ background, color })}>
      <span>{start}</span>
      &nbsp;
      <span>{"-"}</span>
      &nbsp;
      <span css={endDuration({ end })}>{end}</span>
    </div>
  )
}
