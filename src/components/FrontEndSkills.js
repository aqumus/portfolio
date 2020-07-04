import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  opacity: 0.15;
  font-size: ${isSmallScreen ? "18vh" : "35vh"};
  line-height: 30vh;
`

export const FrontEndSkills = ({ show, onNext }) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <SkillDetails
      header="Front End Skills"
      background={Palette.DARK}
      color={Palette.MEDIUM}
      imgSrc={FrontEndSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
    />
  )
}
