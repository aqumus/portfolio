import { gsap } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useLayoutEffect, useRef } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Experience } from "../components/experience-new"
import { SkillsNew } from "../components/skills-new"
import { AboutNew } from "../components/about-new"
import Palette from "../palette"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
import { Home } from "../components/home"
import { createHomeTimeLine } from "../timelines"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

const landingnContainerStyle = css`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  // scroll-snap-type: y mandatory;
`

const articleStyle = css`
  display: flex;
  flex-direction: column;
`

const LandingPage = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const homeTimeLine = useRef(createHomeTimeLine("landing"))

  useLayoutEffect(() => {
    if (isSmallScreen === undefined) {
      return
    }
    Splitting()
  }, [isSmallScreen])

  return (
    <div css={landingnContainerStyle} id="landing">
      <Home
        overlay={false}
        homeTimeLine={homeTimeLine.current}
        parentId={"landing"}
      />
      <article id="content-container" css={articleStyle}>
        <AboutNew />
        <SkillsNew />
        <Experience />
      </article>
    </div>
  )
}

export default LandingPage
