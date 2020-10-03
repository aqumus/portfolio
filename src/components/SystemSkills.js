import React, { useEffect } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import SystemSkillsSvg from "../images/SystemSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useSplittingLoaded } from "../hooks/useSplitting"
import backendSkillsNav from "../images/backend_skills_nav_rhs.svg"
import frontendSkillsNav from "../images/frontend_skills_nav.svg"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  -webkit-text-stroke: 2px ${Palette.MEDIUM};
  text-shadow: -2px -2px 0 ${Palette.MEDIUM}, 2px -2px 0 ${Palette.MEDIUM},
    -2px 2px 0 ${Palette.MEDIUM}, 2px 2px 0 ${Palette.MEDIUM};
  opacity: 0.6;
  font-size: ${isSmallScreen ? "19vw" : "10vw"};
  line-height: ${isSmallScreen ? "15vw" : "10vw"};
  padding-right: ${isSmallScreen ? "0px" : "2vw"};
  transform: translateX(-120%);
`

export const SystemSkills = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const isSplittingLoaded = useSplittingLoaded()
  useEffect(() => {
    if (isSmallScreen === undefined || !isSplittingLoaded) {
      return
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#my-skills-system",
          start: "top 5%",
          scroller: "#landing",
        },
      })
      .to("#my-skills-system-header", {
        x: "0%",
      })
      .fromTo(
        "#my-skills-system-img",
        {
          scale: 0,
        },
        {
          scale: 1,
        },
        "<"
      )
      .staggerFromTo(
        '#my-skills-system > nav[data-inview="Skills"] > span',
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "-=0.5"
      )
      .fromTo(
        `#my-skills-system .skills-lhs-nav`,
        { y: "-100%" },
        { y: "0%" },
        "<"
      )
      .fromTo(
        `#my-skills-system .skills-rhs-nav`,
        { y: "100%" },
        { y: "0%" },
        "<"
      )
      .fromTo(
        `#my-skills-system [data-id="mobile-drawer"]`,
        { scale: 0 },
        { scale: 1 },
        "<"
      )
  }, [isSmallScreen, isSplittingLoaded])
  const onLhsNavClick = () =>
    gsap.to("#landing", {
      duration: 0.5,
      scrollTo: "#my-skills-front-end",
    })

  const onRhsNavClick = () =>
    gsap.to("#landing", {
      duration: 0.5,
      scrollTo: "#my-skills-front-end",
    })
  return (
    <SkillDetails
      containerId="my-skills-system"
      headerId="my-skills-system-header"
      imgId="my-skills-system-img"
      header="System Skills"
      background={Palette.LIGHT}
      color={Palette.DARK}
      imgSrc={SystemSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
      lhsNavImgSrc={frontendSkillsNav}
      rhsNavImgSrc={backendSkillsNav}
      onLhsNavClick={onLhsNavClick}
      onRhsNavClick={onRhsNavClick}
    />
  )
}
