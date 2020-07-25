import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  opacity: 0.3;
  font-size: ${isSmallScreen ? "20vw" : "12vw"};
  line-height: ${isSmallScreen ? "15vw" : "10vw"};
  margin-bottom: 4vh;
`

export const FrontEndSkills = () => {
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
