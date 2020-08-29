import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { animated, useTransition } from "react-spring"
import BackEndSkillsSvg from "../images/BackEndCloudSkills.svg"
import BackEndNextArrow from "../images/BackEndNextArrow.svg"
import BackEndPrevArrow from "../images/BackEndPreviousArrow.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const headerStyle = isSmallScreen => css`
  color: ${Palette.DARK};
  opacity: 0.7;
  font-size: 360px;
  font-size: ${isSmallScreen ? "16vw" : "9vw"};
  line-height: ${isSmallScreen ? "10vw" : "8vw"};
  letter-spacing: ${isSmallScreen ? "-5px" : "-10px"};
  padding-right: ${isSmallScreen ? "0px" : "1vw"};
  margin-bottom: 4vh;
`

export const BackEndSkills = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <SkillDetails
      header="Backend Cloud Skills"
      background={Palette.LIGHT_DARK}
      color={Palette.LIGHT}
      imgSrc={BackEndSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
    />
  )
}
