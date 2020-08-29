import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { animated, useTransition } from "react-spring"
import SystemSkillsSvg from "../images/SystemSkills.svg"
import SystemPrevArrow from "../images/SystemPreviousArrow.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  -webkit-text-stroke: 2px ${Palette.MEDIUM};
  text-shadow: -2px -2px 0 ${Palette.MEDIUM}, 2px -2px 0 ${Palette.MEDIUM},
    -2px 2px 0 ${Palette.MEDIUM}, 2px 2px 0 ${Palette.MEDIUM};
  opacity: 0.6;
  font-size: ${isSmallScreen ? "19vw" : "10vw"};
  line-height: ${isSmallScreen ? "15vw" : "10vw"};
  padding-right: ${isSmallScreen ? "0px" : "2vw"};
`

export const SystemSkills = ({ show, onPrev }) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <SkillDetails
      header="System Skills"
      background={Palette.LIGHT}
      color={Palette.DARK}
      imgSrc={SystemSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
    />
  )
}
