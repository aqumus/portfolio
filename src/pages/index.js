import React, { useState, useCallback } from "react"
import { animated, useSpring, useSprings, useTransition } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Layout from "../components/layout"
import Loader from "../components/loader"
import Intro from "../components/intro"
import Experience from "../components/experience"
import Skills from "../components/skills"

const pageStyle = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 15;
`

const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  color: white;
`

const titleContainer = css`
  position: relative;
  background: #ff5959;
  flex-grow: 1;
  cursor: pointer;
`

const skills = css`
  background: #293462;
  background: #122d42;
`

const skillsTitle = css`
  color: #fe5f55;
  color: #cbf9da;
`

const about = css`
  background: #dae1e7;
`

const aboutLayeredTitle = css`
  color: #dd6b4d;
`

const projects = css`
  background: #394359;
  background: #392f2f;
  background: #3a7563;
`

const projectsLayeredTitle = css`
  color: #ba6c65;
  color: #59a985;
  color: #e6d3a7;
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

const aboutTitle = css`
  text-shadow: 0px 0px 25px #807878;
`

const layeredTitle = css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 0%;
  font-size: 0vh;
  text-shadow: none;
  filter: grayscale(0%);
  z-index: 1;
  color: white;
`

const showLayerProps = {
  width: "100%",
  left: "0%",
  fontSize: "10vh",
}

const hideLayerProps = {
  width: "0%",
  left: "50%",
  fontSize: "0vh",
}

const skillsDetails = css`
  position: absolute;
  top: 0;
  height: 100%;
  background: #122d42;
  display: flex;
  flex-grow: 1;
  z-index: 11;
  width: 0%;
`

const aboutDetails = css`
  position: absolute;
  top: 0;
  height: 100%;
  background: #dae1e7;
  display: flex;
  z-index: 11;
  width: 0%;
`

const projectDetails = css`
  position: absolute;
  top: 0;
  height: 100%;
  background: #3a7563;
  display: flex;
  z-index: 11;
  width: 0%;
`

const pages = [
  ({ style, onCloseHandler }) => (
    <animated.div style={{ ...style, background: "lightpink" }} css={pageStyle}>
      <Skills onCloseHandler={onCloseHandler} />
    </animated.div>
  ),
  ({ style, onCloseHandler }) => (
    <animated.div
      style={{ ...style, background: "lightgreen" }}
      css={pageStyle}
    >
      <Experience onCloseHandler={onCloseHandler} />
    </animated.div>
  ),
]

const IndexPage = () => {
  const [isLoading, setLoading] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  setTimeout(() => setLoading(false), 3000)

  const [springs, setSprings, stop] = useSprings(3, () => ({
    from: hideLayerProps,
  }))

  setSprings(index => {
    if (index === hoveredItem) return showLayerProps
    return hideLayerProps
  })

  const [showDetails, setShowDetails] = useState({
    skills: false,
    about: false,
    projects: false,
  })

  const skillDetailTransitions = useTransition(showDetails.skills, null, {
    from: {
      width: "0%",
    },
    enter: {
      width: "100%",
    },
    leave: {
      width: "0%",
    },
  })

  const aboutDetailTransitions = useTransition(showDetails.about, null, {
    from: {
      width: "0%",
      left: "50%",
    },
    enter: {
      width: "100%",
      left: "0%",
    },
    leave: {
      width: "0%",
      left: "50%",
    },
  })

  const projectDetailTransitions = useTransition(showDetails.projects, null, {
    from: {
      width: "0%",
      left: "100%",
    },
    enter: {
      width: "100%",
      left: "0%",
    },
    leave: {
      width: "0%",
      left: "100%",
    },
  })

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div css={container}>
          <div
            css={titleContainer}
            onMouseEnter={() => setHoveredItem(0)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setShowDetails({ skills: true })}
          >
            <animated.span
              css={[title, skills, layeredTitle, skillsTitle]}
              style={springs[0]}
            >
              Skills
            </animated.span>
            <span css={[title, skills]}>Skills</span>
          </div>

          <div
            css={titleContainer}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setShowDetails({ about: true })}
          >
            <animated.span
              css={[title, about, layeredTitle, aboutLayeredTitle]}
              style={springs[1]}
            >
              About
            </animated.span>
            <span css={[title, about, aboutTitle]}>About</span>
          </div>

          <div
            css={titleContainer}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setShowDetails({ projects: true })}
          >
            <animated.span
              css={[title, projects, layeredTitle, projectsLayeredTitle]}
              style={springs[2]}
            >
              Projects
            </animated.span>
            <span css={[title, projects]}>Projects</span>
          </div>
        </div>
      )}
      {skillDetailTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              css={skillsDetails}
              key={key}
              style={props}
              onClick={() => setShowDetails({ skills: false })}
            >
              Working
            </animated.div>
          )
      )}

      {aboutDetailTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              css={aboutDetails}
              key={key}
              style={props}
              onClick={() => setShowDetails({ about: false })}
            >
              Working
            </animated.div>
          )
      )}

      {projectDetailTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              css={projectDetails}
              key={key}
              style={props}
              onClick={() => setShowDetails({ projects: false })}
            >
              Working
            </animated.div>
          )
      )}
    </>
  )
}

export default IndexPage
