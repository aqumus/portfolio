import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import IntroImage from "../components/intro-image"
import SEO from "../components/seo"
import About from "../components/about"

import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import Experience from "./experience"

const introContainerStyle = isSmallScreen => css`
  position: absolute;
  top: 0;
  z-index: 10;
  background: #89bccd;
  display: flex;
  overflow: scroll;
  flex-direction: ${isSmallScreen ? "column" : "row"};
  padding: 5vh 5vw;
  height: 100vh;
`

const SkillsNav = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: lightpink;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  top: 5vh;
  width: 30px;
  height: 200px;
  left: 0;
  transform: rotate(180deg);
`

const ExperienceNav = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: lightgreen;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  top: 5vh;
  width: 30px;
  height: 200px;
  background: lightgreen;
  right: 0;
`

const Intro = ({ onClickHandler }) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={introContainerStyle(isSmallScreen)}>
      <SEO
        title="Aquib Vadsaria Intro"
        description="Brief Intro, area of interest and hobbies"
      />
      <SkillsNav onClick={() => onClickHandler(0)}>Skills</SkillsNav>
      <ExperienceNav onClick={() => onClickHandler(1)}>
        Experience
      </ExperienceNav>
      <IntroImage />
      <About />
    </div>
  )
}

export default Intro
