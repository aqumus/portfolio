import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { Description } from "./Description"
import { Company } from "./Company"
import { Designation } from "./Designation"
import { Duration } from "./Duration"
import { TechnologyUsed } from "./TechnologyUsed"
import { ExperienceContext } from "./ExperienceContext"
import { NavigationNew } from "../navigation-new"
import Palette from "../../palette"
import { createHomeTimeLine } from "../../timelines"
import { Home } from "../home"
import { useSplittingLoaded } from "../../hooks/useSplitting"
import { ExpNavigation } from "./ExpNavigation"

const experienceContainerStyle = ({ background, color }) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${background};
  color: ${color};
  scroll-snap-align: start;
`

const sectionStyle = ({ background, color, isSmallScreen }) => css`
  width: 65%;
  height: 65%;
  position: relative;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${isSmallScreen ? "5vh 0 0 0" : "5vh 0"};
  background: ${background};
  color: ${color};
  transform: translateX(100%);
`

const experienceTitleStyle = isSmallScreen => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${isSmallScreen ? "7vh" : "6vh"};
`

const experienceHeaderStyle = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

const NORMAL_TRIGGER = {
  trigger: "#my-experience",
  start: "top 5%",
  scroller: "#landing",
}

const HORIZONTAL_TRIGGER = containerId => ({
  trigger: `#${containerId}`,
  start: "left 25%",
  horizontal: true,
  scroller: "#my-experience",
})

export const ExperienceContainer = ({
  background,
  secondBackground,
  color,
  duration,
  company,
  companyFirstHalf,
  designation,
  designationFirstHalf,
  renderDescription,
  technologyUsed,
  containerId,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const isSplittingLoaded = useSplittingLoaded()
  const homeTimeLine = useRef(createHomeTimeLine(containerId))
  useEffect(() => {
    if (isSmallScreen === undefined || !isSplittingLoaded) {
      return
    }
    const scrollTrigger = containerId.includes("jp")
      ? NORMAL_TRIGGER
      : HORIZONTAL_TRIGGER(containerId)
    const experienceTimeline = gsap
      .timeline({
        scrollTrigger,
      })
      .to(`#${containerId} > .experience-section`, {
        duration: 0.5,
        x: "0%",
      })
      .staggerFromTo(
        `#${containerId} .experience-company> span:nth-child(1) .char`,
        0.5,
        { x: "100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
        },
        0.014
      )
      .staggerFromTo(
        `#${containerId} .experience-company > span:nth-child(2) .char`,
        0.5,
        { x: "-100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
        },
        0.014,
        "<"
      )
      .staggerFromTo(
        `#${containerId} .experience-designation> span:nth-child(1) .char`,
        0.5,
        { x: "100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
        },
        0.014,
        "<"
      )
      .staggerFromTo(
        `#${containerId} .experience-designation > span:nth-child(2) .char`,
        0.5,
        { x: "-100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
        },
        0.014,
        "<"
      )
      .fromTo(
        `#${containerId} .experience-duration`,
        { x: "100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
        },
        "-=0.25"
      )
      .staggerFromTo(
        `#${containerId} .experience-duration .word:nth-child(odd)`,
        0.5,
        { y: "-100%", autoAlpha: 0 },
        {
          y: "0%",
          autoAlpha: 1,
        },
        0.014,
        "-=0.25"
      )
      .staggerFromTo(
        `#${containerId} .experience-duration .word:nth-child(even)`,
        0.5,
        { y: "100%", autoAlpha: 0 },
        {
          y: "0%",
          autoAlpha: 1,
        },
        0.014,
        "<"
      )
      .staggerFromTo(
        `#${containerId} .experience-description .word`,
        0.5,
        { y: "-100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
        },
        0.014,
        "<"
      )
      .staggerFromTo(
        `#${containerId} .experience-technology`,
        0.5,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
        },
        0.014,
        "<"
      )
      .staggerFromTo(
        `#${containerId} > nav[data-inview="Experience"] > span`,
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "<"
      )
      .staggerFromTo(
        `#${containerId} > aside > svg`,
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "<"
      )
    if (isSmallScreen) {
      experienceTimeline.fromTo(
        `#${containerId} [data-id="mobile-drawer"]`,
        { scale: 0 },
        { scale: 1 },
        "<"
      )
    }
  }, [isSmallScreen, isSplittingLoaded])
  return (
    <ExperienceContext.Provider
      value={{
        background,
        secondBackground,
        color,
        company,
      }}
    >
      <div
        css={experienceContainerStyle({ background, color })}
        id={containerId}
      >
        <NavigationNew
          inView={"Experience"}
          color={Palette.LIGHT}
          homeTimeLine={homeTimeLine.current}
          parentId={containerId}
        />
        <Home
          overlay={true}
          homeTimeLine={homeTimeLine.current}
          parentId={containerId}
        />
        <section
          className="experience-section"
          css={sectionStyle({
            color,
            background: secondBackground,
            isSmallScreen,
          })}
        >
          <div css={experienceTitleStyle(isSmallScreen)}>
            <div css={experienceHeaderStyle}>
              <Company firstHalf={companyFirstHalf}>{company}</Company>
              <Designation firstHalf={designationFirstHalf}>
                {designation}
              </Designation>
            </div>
            <Duration>{duration}</Duration>
          </div>
          <Description renderDescription={renderDescription} />
        </section>
        <TechnologyUsed>{technologyUsed}</TechnologyUsed>
        <ExpNavigation />
      </div>
    </ExperienceContext.Provider>
  )
}
