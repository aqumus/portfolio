import React, { useEffect } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import FrontEndSkillsSvg from "../images/FrontEndSkills.svg"
import Palette from "../palette"
import { SkillDetails } from "./SkillDetails"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { skillsTimeline } from "../timelines"

const headerStyle = isSmallScreen => css`
  color: ${Palette.LIGHT};
  opacity: 0.3;
  font-size: ${isSmallScreen ? "20vw" : "12vw"};
  line-height: ${isSmallScreen ? "15vw" : "10vw"};
  margin-bottom: 4vh;

  #my-skills-front-end-header {
    transform: translate(-120%, 0px);
  }

  #my-skills-front-end-img {
    transform: scale(0);
  }
`

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#my-skills-front-end",
      start: "top top",
    },
  })
  .to("#my-skills-front-end-header", {
    x: "120%",
  })
  .to("#my-skills-front-end-img", {
    scale: 1,
  })

export const FrontEndSkills = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  if (isSmallScreen === undefined) {
    return null
  }

  // useEffect(() => {
  //   if (isSmallScreen === undefined) {
  //     return
  //   }

  // }, [isSmallScreen])
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
