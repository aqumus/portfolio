import React, { useEffect } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { NavigationNew } from "./navigation-new"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { skillsTimeline } from "../timelines"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  opacity: 0.3;
  font-size: ${isSmallScreen ? "20vw" : "12vw"};
  line-height: ${isSmallScreen ? "15vw" : "10vw"};
  margin-bottom: 4vh;
  transform: translateX(-120%);
`

export const FrontEndSkills = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  useEffect(() => {
    if (isSmallScreen === undefined) {
      return
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#my-skills-front-end",
          start: "top 5%",
          scroller: "#landing",
        },
      })
      .to("#my-skills-front-end-header", {
        x: "0%",
      })
      .fromTo(
        "#my-skills-front-end-img",
        {
          scale: 0,
        },
        {
          scale: 1,
        },
        "<"
      )
      .staggerFromTo(
        '#my-skills-front-end > nav[data-inview="Skills"] > span',
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "-=0.5"
      )
  }, [isSmallScreen])
  return (
    <SkillDetails
      containerId="my-skills-front-end"
      headerId="my-skills-front-end-header"
      imgId="my-skills-front-end-img"
      header="Front End Skills"
      background={Palette.DARK}
      color={Palette.MEDIUM}
      imgSrc={FrontEndSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
    />
  )
}
