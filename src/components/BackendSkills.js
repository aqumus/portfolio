import React, { useEffect } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import BackEndSkillsSvg from "../images/BackendCloudSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { useSplittingLoaded } from "../hooks/useSplitting"

const headerStyle = isSmallScreen => css`
  color: ${Palette.DARK};
  opacity: 0.7;
  font-size: 360px;
  font-size: ${isSmallScreen ? "16vw" : "9vw"};
  line-height: ${isSmallScreen ? "10vw" : "8vw"};
  letter-spacing: ${isSmallScreen ? "-5px" : "-10px"};
  padding-right: ${isSmallScreen ? "0px" : "1vw"};
  margin-bottom: 4vh;
  transform: translateX(-120%);
`

export const BackEndSkills = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const isSplittingLoaded = useSplittingLoaded()
  useEffect(() => {
    if (isSmallScreen === undefined || !isSplittingLoaded) {
      return
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#my-skills-back-end",
          start: "top 5%",
          scroller: "#landing",
        },
      })
      .to("#my-skills-back-end-header", {
        x: "0%",
      })
      .fromTo(
        "#my-skills-back-end-img",
        {
          scale: 0,
        },
        {
          scale: 1,
        },
        "<"
      )
      .staggerFromTo(
        '#my-skills-back-end > nav[data-inview="Skills"] > span',
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "-=0.5"
      )
  }, [isSmallScreen, isSplittingLoaded])
  return (
    <SkillDetails
      containerId="my-skills-back-end"
      headerId="my-skills-back-end-header"
      imgId="my-skills-back-end-img"
      header="Backend Cloud Skills"
      background={Palette.LIGHT_DARK}
      color={Palette.LIGHT}
      imgSrc={BackEndSkillsSvg}
      headerClassName={headerStyle(isSmallScreen)}
    />
  )
}
