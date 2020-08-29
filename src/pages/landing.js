import { gsap } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useLayoutEffect, useRef, useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// import Loader from "../components/loader"
// import BulbLoader from "../components/bulb-loader"
import { Experience } from "../components/experience-new"
import { SkillsNew } from "../components/skills-new"
import { AboutNew } from "../components/about-new"
import { LinkHover } from "../components/link-hover"
import Palette from "../palette"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useIsMounted } from "../hooks/useIsMounted"
import {
  homeTimeLine,
  indexPageTimeline,
  homeMobileTimeline,
  aboutTimeLine,
} from "../timelines"
import { NavigationNew } from "../components/navigation-new"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

const landingnContainerStyle = css`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  // scroll-snap-type: y mandatory;
`

const container = css`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
  position: relative;
  z-index: 2;
  background: ${Palette.DARK};
  visibility: hidden;
  opacity: 0;
  // scroll-snap-align: start;
`

const smallScreenContainer = css`
  flex-direction: column;
`

const skillsLayeredTitle = css`
  color: ${Palette.MEDIUM};
  filter: grayscale(0%);
  text-shadow: none;
`

const skills = isSmallScreen => css`
  background: ${Palette.DARK};
  transform: ${isSmallScreen ? "translateX(-100%)" : "translateY(-100%)"};
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
  background: ${Palette.LIGHT};
  text-shadow: 0px 0px 25px #807878;
  transform: ${isSmallScreen ? "translateX(100%)" : "translateY(100%)"};
  ${!isSmallScreen &&
    css`&:hover {
    ${aboutLayeredTitle}`}
    ${isSmallScreen && aboutLayeredTitle}
  }
`

const projectsLayeredTitle = css`
  color: ${Palette.LIGHT};
  filter: grayscale(0%);
  text-shadow: none;
`

const projects = isSmallScreen => css`
  background: ${Palette.LIGHT_DARK};
  transform: ${isSmallScreen ? "translateX(100%)" : "translateY(100%)"};
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

const articleStyle = css`
  display: flex;
  flex-direction: column;
`

const LandingPage = () => {
  const isMounted = useIsMounted()
  const isSmallScreen = useSmallScreenMediaQuery()
  const skillLinkRef = useRef()
  const aboutLinkRef = useRef()
  const projectLinkRef = useRef()
  const [showArticle, setShowArticle] = useState(false)

  const setShowDetails = id => {
    homeTimeLine.reverse().then(() => {
      setShowArticle(true)
      gsap.to("#landing", {
        duration: 0.5,
        scrollTo: `#${id}`,
        ease: "none",
      })
    })
  }

  useLayoutEffect(() => {
    skillLinkRef.current && new LinkHover(skillLinkRef.current)
    aboutLinkRef.current && new LinkHover(aboutLinkRef.current)
    projectLinkRef.current && new LinkHover(projectLinkRef.current)
    if (isSmallScreen === undefined) {
      return
    }
    Splitting()
    const indexElTo = isSmallScreen ? { x: "0%" } : { y: "0%" }
    homeTimeLine
      .to("#my-index", {
        autoAlpha: 1,
      })
      .to("#index-about", indexElTo)
      .to("#index-skills", indexElTo)
      .to("#index-experience", {
        ...indexElTo,
        onReverseComplete: () => {
          // setShowArticle(true)
        },
        onStart: () => {
          // if (showArticle) {
          //   setShowArticle(false)
          // }
        },
        onComplete: () => {
          // const indexEl = document.querySelector("#my-index")
          // const articleContainerEl = document.querySelector(
          //   "#content-container"
          // )
          // indexEl.style.background = "transparent"
          // articleContainerEl.style.visibility = "visible"
          // articleContainerEl.style.opacity = 1
        },
      })
      .play()
  }, [isSmallScreen])

  return (
    <div css={landingnContainerStyle} id="landing">
      <div
        id="my-index"
        css={[container, isSmallScreen && smallScreenContainer]}
      >
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
        {isSmallScreen && (
          <NavigationNew showCross={true} color={Palette.DARK} />
        )}
        <span
          id="index-about"
          css={[title(isSmallScreen), about(isSmallScreen)]}
          onClick={() => setShowDetails("my-about")}
        >
          <label ref={aboutLinkRef}>About</label>
        </span>
        <span
          id="index-skills"
          css={[title(isSmallScreen), skills(isSmallScreen)]}
          onClick={() => setShowDetails("my-skills")}
        >
          <label ref={skillLinkRef}>Skills</label>
        </span>
        <span
          id="index-experience"
          css={[title(isSmallScreen), projects(isSmallScreen)]}
          onClick={() => setShowDetails("my-experience")}
        >
          <label ref={projectLinkRef}>Projects</label>
        </span>
      </div>
      <article id="content-container" css={articleStyle}>
        <AboutNew />
        <SkillsNew />
        <Experience />
      </article>
    </div>
  )
}

export default LandingPage
