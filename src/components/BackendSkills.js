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
  opacity: 0.55;
  font-size: 360px;
  font-size: ${isSmallScreen ? "12vh" : "31vh"};
  line-height: ${isSmallScreen ? "25vh" : "29vh"};
`

export const BackEndSkills = ({ show, onNext, onPrev }) => {
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
