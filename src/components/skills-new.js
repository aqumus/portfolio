import React, { useState } from "react"
import SEO from "./seo"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FrontEndSkills } from "./FrontEndSkills"
import { BackEndSkills } from "./BackendSkills"
import { SystemSkills } from "./SystemSkills"
import { NavigationNew } from "./navigation-new"
import Palette from "../palette"

const skillsDetailsContainer = css`
  height: 100%;
  width: 100%;
  position: relative;
`
const skillsDetails = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100vw;
`

export function SkillsNew({ setShowDetails, show }) {
  return (
    <div css={skillsDetailsContainer} id="my-skills">
      <SEO
        title="Aquib Vadsaria Skills"
        description="List of Aquib Vadsaria FrontEnd Skill, Backend and cloud skills, System skills"
      />
      <div css={skillsDetails}>
        <FrontEndSkills />
        <BackEndSkills />
        <SystemSkills />
      </div>
    </div>
  )
}
