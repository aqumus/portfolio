import React, { useState, useCallback, useEffect, useRef } from "react"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Loader from "../components/loader"
import BulbLoader from "../components/bulb-loader"
import { Experience } from "../components/experience-new"
import { SkillsNew } from "../components/skills-new"
import { AboutNew } from "../components/about-new"
import { LinkHover } from "../components/link-hover"
import palette from "../palette"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useIsMounted } from "../hooks/useIsMounted"

const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
`

const smallScreenContainer = css`
  flex-direction: column;
`

const skillsLayeredTitle = css`
  color: #dd6b4d;
  filter: grayscale(0%);
  text-shadow: none;
`

const skills = isSmallScreen => css`
  background: #1a2639;
  ${!isSmallScreen &&
    css`&:hover {
    ${skillsLayeredTitle}`}
    ${isSmallScreen && skillsLayeredTitle}
  }
`

const aboutLayeredTitle = css`
  color: #c24d2c;
  filter: grayscale(0%);
  text-shadow: none;
`

const about = isSmallScreen => css`
  background: #d9dad7;
  text-shadow: 0px 0px 25px #807878;
  ${!isSmallScreen &&
    css`&:hover {
    ${aboutLayeredTitle}`}
    ${isSmallScreen && aboutLayeredTitle}
  }
`

const projectsLayeredTitle = css`
  color: #d9dad7;
  filter: grayscale(0%);
  text-shadow: none;
`

const projects = isSmallScreen => css`
  background: #1a2639;
  ${!isSmallScreen &&
    css`&:hover {
    ${projectsLayeredTitle}`}
    ${isSmallScreen && projectsLayeredTitle}
  }
`

const rotatedTitle = `
writing-mode: vertical-rl;
text-orientation: sideways;
transform: rotate(180deg);
text-transform: uppercase;
letter-spacing: 25px;
color: transparent;
text-shadow: 0px 0px 25px white;
filter: grayscale(100%);
`

const title = isSmallScreen => css`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-shadow: 0px 0px 20px white;
  font-size: ${isSmallScreen ? "8vh" : "10vh"};
  ${!isSmallScreen && rotatedTitle}
`

const svgHidden = css`
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
`

const LandingPage = () => {
  const isMounted = useIsMounted()
  const isSmallScreen = useSmallScreenMediaQuery()
  const skillLinkRef = useRef()
  const aboutLinkRef = useRef()
  const projectLinkRef = useRef()

  const [showDetails, setShowDetails] = useState({
    skills: false,
    about: false,
    projects: false,
  })

  useEffect(() => {
    console.log("Blah", skillLinkRef.current)

    skillLinkRef.current && new LinkHover(skillLinkRef.current)
    aboutLinkRef.current && new LinkHover(aboutLinkRef.current)
    projectLinkRef.current && new LinkHover(projectLinkRef.current)
  }, [isMounted])

  return (
    <>
      <div css={[container, isSmallScreen && smallScreenContainer]}>
        <svg css={svgHidden}>
          <defs>
            <filter id="filter-5">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.7"
                numOctaves="5"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="0"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
            <filter id="filter-6">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.07"
                numOctaves="5"
                seed="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="warp"
                scale="0"
                xChannelSelector="R"
                yChannelSelector="B"
              />
            </filter>
          </defs>
        </svg>
        <span
          css={[title(isSmallScreen), skills(isSmallScreen)]}
          onClick={() => setShowDetails({ skills: true })}
        >
          <label ref={skillLinkRef}>Skills</label>
        </span>
        <span
          css={[title(isSmallScreen), about(isSmallScreen)]}
          onClick={() => setShowDetails({ about: true })}
        >
          <label ref={aboutLinkRef}>About</label>
        </span>
        <span
          css={[title(isSmallScreen), projects(isSmallScreen)]}
          onClick={() => setShowDetails({ projects: true })}
        >
          <label ref={projectLinkRef}>Projects</label>
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

export default LandingPage
