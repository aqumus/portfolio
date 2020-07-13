import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  Suspense,
} from "react"
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

const IndexPage = () => {
  const ProfilePage = React.lazy(() => import("./landing")) // Lazy-loaded

  return (
    <Suspense fallback={<BulbLoader isLoading={true} />}>
      <ProfilePage />
    </Suspense>
  )
}

export default IndexPage
