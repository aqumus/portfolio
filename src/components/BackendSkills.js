import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { animated, useTransition } from "react-spring"
import BackEndSkillsSvg from "../images/BackEndCloudSkills.svg"
import BackEndNextArrow from "../images/BackEndNextArrow.svg"
import BackEndPrevArrow from "../images/BackEndPreviousArrow.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"

const headerStyle = css`
  color: ${Palette.DARK};
  opacity: 0.55;
  font-size: 360px;
  font-size: 31vh;
  line-height: 29vh;
`

export const BackEndSkills = ({ show, onNext, onPrev }) => {
  return (
    <SkillDetails
      header="Backend Cloud Skills"
      background={Palette.LIGHT_DARK}
      color={Palette.LIGHT}
      imgSrc={BackEndSkillsSvg}
      headerClassName={headerStyle}
    />
  )
}
