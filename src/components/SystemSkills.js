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
  opacity: 0.3;
  font-size: 390px;
  font-size: ${isSmallScreen ? "14vh" : "37vh"};
  line-height: ${isSmallScreen ? "45vh" : "50vh"};
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
