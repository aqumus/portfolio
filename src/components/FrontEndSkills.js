import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"

const headerStyle = css`
  color: ${Palette.LIGHT};
  opacity: 0.15;
  font-size: 35vh;
  line-height: 30vh;
`

export const FrontEndSkills = ({ show, onNext }) => {
  return (
    <SkillDetails
      header="Front End Skills"
      background={Palette.DARK}
      color={Palette.MEDIUM}
      imgSrc={FrontEndSkillsSvg}
      headerClassName={headerStyle}
    />
  )
}
