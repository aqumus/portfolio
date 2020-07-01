import React, { useState } from "react"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FrontEndSkills } from "./FrontEndSkills"
import { BackEndSkills } from "./BackendSkills"
import { SystemSkills } from "./SystemSkills"

const skillsDetails = css`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 300vw;
  overflow-x: auto;
  overflow-y: hidden;
`

const Skills = {
  FrontEnd: "FrontEnd",
  Backend: "Backend",
  System: "System",
}

export function SkillsNew({ setShowDetails, show }) {
  return (
    <div css={skillsDetails}>
      <FrontEndSkills />
      <BackEndSkills />
      <SystemSkills />
    </div>
  )
}
