import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { animated, useTransition } from "react-spring"
import SystemSkillsSvg from "../images/SystemSkills.svg"
import SystemPrevArrow from "../images/SystemPreviousArrow.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"

const headerStyle = css`
  color: ${Palette.MEDIUM};
  opacity: 0.3;
  font-size: 390px;
  font-size: 37vh;
  line-height: 50vh;
`

export const SystemSkills = ({ show, onPrev }) => {
  return (
    <SkillDetails
      header="System Skills"
      background={Palette.LIGHT}
      color={Palette.DARK}
      imgSrc={SystemSkillsSvg}
      headerClassName={headerStyle}
    />
  )
}
