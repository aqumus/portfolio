import React, { useEffect } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills_c.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useSplittingLoaded } from "../hooks/useSplitting"
import backendSkillsNav from "../images/backend_skills_nav_l.svg"
import systemSkillsNav from "../images/system_skills_nav_r.svg"

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
  const isSplittingLoaded = useSplittingLoaded()
  useEffect(() => {
    if (isSmallScreen === undefined || !isSplittingLoaded) {
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
      .fromTo(
        `#my-skills-front-end .skills-lhs-nav`,
        { y: "-100%" },
        { y: "0%" },
        "<"
      )
      .fromTo(
        `#my-skills-front-end .skills-rhs-nav`,
        { y: "100%" },
        { y: "0%" },
        "<"
      )
      .fromTo(
        `#my-skills-front-end [data-id="mobile-drawer"]`,
        { scale: 0 },
        { scale: 1 },
        "<"
      )
  }, [isSmallScreen, isSplittingLoaded])
  const onLhsNavClick = () =>
    gsap.to("#landing", {
      duration: 0.5,
      scrollTo: "#my-skills-back-end",
    })

  const onRhsNavClick = () =>
    gsap.to("#landing", {
      duration: 0.5,
      scrollTo: "#my-skills-system",
    })
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
      lhsNavImgSrc={backendSkillsNav}
      rhsNavImgSrc={systemSkillsNav}
      onLhsNavClick={onLhsNavClick}
      onRhsNavClick={onRhsNavClick}
    />
  )
}
