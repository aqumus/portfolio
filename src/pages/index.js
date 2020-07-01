import React, { useState, useCallback } from "react"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Loader from "../components/loader"
import { Experience } from "../components/experience-new"
import { SkillsNew } from "../components/skills-new"
import { AboutNew } from "../components/about-new"
import palette from "../palette"

const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
`

const titleContainer = css`
  position: relative;
  background: #ff5959;
  flex-grow: 1;
  cursor: pointer;
`

const layeredTitle = css`
  text-shadow: none;
  filter: grayscale(0%);
`
const skillsTitle = css`
  color: #dd6b4d;
`

const skills = css`
  background: #1a2639;
  &:hover {
    ${layeredTitle}
    ${skillsTitle}
  }
`

const aboutLayeredTitle = css`
  color: #c24d2c;
`

const about = css`
  background: #d9dad7;
  text-shadow: 0px 0px 25px #807878;
  &:hover {
    ${layeredTitle}
    ${aboutLayeredTitle}
  }
`

const projectsLayeredTitle = css`
  color: #d9dad7;
`

const projects = css`
  background: #1a2639;
  &:hover {
    ${layeredTitle}
    ${projectsLayeredTitle}
  }
`

const title = css`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(180deg);
  text-transform: uppercase;
  letter-spacing: 25px;
  font-size: 10vh;
  color: transparent;
  text-shadow: 0px 0px 25px white;
  filter: grayscale(100%);
`

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)

  const [showDetails, setShowDetails] = useState({
    skills: false,
    about: false,
    projects: false,
  })

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div css={container}>
          <span
            css={[title, skills]}
            onClick={() => setShowDetails({ skills: true })}
          >
            Skills
          </span>
          <span
            css={[title, about]}
            onClick={() => setShowDetails({ about: true })}
          >
            About
          </span>
          <span
            css={[title, projects]}
            onClick={() => setShowDetails({ projects: true })}
          >
            Projects
          </span>
        </div>
      )}
      {showDetails.skills && (
        <SkillsNew
          show={showDetails.skills}
          setShowDetails={() => setShowDetails({ skills: !showDetails.skills })}
        />
      )}

      {showDetails.about && <AboutNew />}
      {showDetails.projects && <Experience />}
    </>
  )
}

export default IndexPage
