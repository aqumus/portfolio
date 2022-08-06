import { gsap } from "gsap"
import React, { useEffect, useLayoutEffect, useRef } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { LinkHover } from "../components/link-hover"
import Palette from "../palette"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useIsMounted } from "../hooks/useIsMounted"
import { NavigationNew } from "../components/navigation-new"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import { touchMoveListerner } from "../util"

const overlayContainer = css`
  position: absolute;
  z-index: 3;
  background: transparent;
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
  scroll-snap-align: start;
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

export const Home = ({ overlay, homeTimeLine, parentId }) => {
  const isMounted = useIsMounted()
  const isSmallScreen = useSmallScreenMediaQuery()
  const skillLinkRef = useRef()
  const aboutLinkRef = useRef()
  const experienceLinkRef = useRef()
  const containerIndexId = `${parentId}-my-index`
  const aboutIndexId = `${parentId}-index-about`
  const skillsIndexId = `${parentId}-index-skills`
  const experienceIndexId = `${parentId}-index-experience`
  const indexElTo = isSmallScreen ? { x: "0%" } : { y: "0%" }

  const setShowDetails = id => {
    if (!overlay) {
      gsap.to("#landing", {
        duration: 0.5,
        scrollTo: `#${id}`,
        ease: "none",
      })
      return
    }
    homeTimeLine.reverse().then(() => {
      gsap
        .to("#landing", {
          duration: 0.5,
          scrollTo: `#${id}`,
          ease: "none",
        })
        .then(() => {
          document.getElementById("landing").style.overflowY = "auto"
          document.getElementById("my-experience").style.overflowX = "auto"
          document
            .getElementById("landing")
            .removeEventListener("touchmove", touchMoveListerner, {
              passive: false,
            })
          document
            .getElementById("landing")
            .removeEventListener("wheel", touchMoveListerner, {
              passive: false,
            })
        })
    })
  }

  useLayoutEffect(() => {
    skillLinkRef.current && new LinkHover(skillLinkRef.current)
    aboutLinkRef.current && new LinkHover(aboutLinkRef.current)
    experienceLinkRef.current && new LinkHover(experienceLinkRef.current)
    if (isSmallScreen === undefined) {
      return
    }

    if (overlay) {
      //   homeTimeLine.progress(1)
      return
    }
    homeTimeLine
      .to(
        `#${containerIndexId}`,
        {
          autoAlpha: 1,
        },
        0.2
      )
      .to(`#${aboutIndexId}`, 0.75, indexElTo, "-=0.3")
      .to(`#${skillsIndexId}`, 0.75, indexElTo, "-=0.5")
      .to(
        `#${experienceIndexId}`,
        0.75,
        {
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
        },
        "-=0.5"
      )
      .play()
  }, [isSmallScreen, overlay])

  return (
    <div
      id={containerIndexId}
      css={[
        container,
        isSmallScreen && smallScreenContainer,
        overlay && overlayContainer,
      ]}
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
      {isSmallScreen && overlay && (
        <NavigationNew
          showCross={true}
          color={Palette.DARK}
          homeTimeLine={homeTimeLine}
          parentId={parentId}
        />
      )}
      <span
        id={aboutIndexId}
        css={[title(isSmallScreen), about(isSmallScreen)]}
        onClick={() => setShowDetails("my-about")}
      >
        <label ref={aboutLinkRef}>About</label>
      </span>
      <span
        id={skillsIndexId}
        css={[title(isSmallScreen), skills(isSmallScreen)]}
        onClick={() => setShowDetails("my-skills")}
      >
        <label ref={skillLinkRef}>Skills</label>
      </span>
      <span
        id={experienceIndexId}
        css={[title(isSmallScreen), projects(isSmallScreen)]}
        onClick={() => setShowDetails("my-experience")}
      >
        <label ref={experienceLinkRef}>Experience</label>
      </span>
    </div>
  )
}
