import React, { useState } from "react"
import SEO from "./seo"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FrontEndSkills } from "./FrontEndSkills"
import { BackEndSkills } from "./BackendSkills"
import { SystemSkills } from "./SystemSkills"

const skillsDetailsContainer = css`
  height: 100%;
  weight: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
`
const skillsDetails = css`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 300vw;
`

export function SkillsNew({ setShowDetails, show }) {
  return (
    <div css={skillsDetailsContainer}>
      <div css={skillsDetails}>
        <SEO
          title="Aquib Vadsaria Skills"
          description="List of Aquib Vadsaria FrontEnd Skill, Backend and cloud skills, System skills"
        />
        <FrontEndSkills />
        <BackEndSkills />
        <SystemSkills />
      </div>
    </div>
  )
}
