import React, { useEffect, useRef, useContext } from "react"
import { gsap } from "gsap"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { Bullet } from "../Icons/Bullet"
import { ExperienceContext } from "./ExperienceContext"

const ExpBullet = styled(Bullet)`
  width: ${({ isSmallScreen }) => (isSmallScreen ? 14 : 40)}px;
  height: ${({ isSmallScreen }) => (isSmallScreen ? 8 : 15)}px;
`

const expAsideStyle = ({ color, background, isSmallScreen }) => css`
  position: absolute;
  bottom: ${isSmallScreen ? "7vh" : "25px"};
  right: ${isSmallScreen ? 20 : 30}px;
  svg {
    circle {
      fill: ${background};
      cursor: pointer;
    }
    [data-selected="true"] {
      fill: ${color};
    }
  }
`

export const ExpNavigation = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const { secondBackground, color, company } = useContext(ExperienceContext)
  const onClick = index => {
    switch (index) {
      case 0:
        gsap.to("#my-experience", {
          duration: 1,
          scrollTo: `#experience-jp-morgan`,
        })
        break

      case 1:
        gsap.to("#my-experience", {
          duration: 1,
          scrollTo: `#experience-builtio`,
        })
        break
      case 2:
        gsap.to("#my-experience", {
          duration: 1,
          scrollTo: `#experience-ibm`,
        })
        break
    }
  }
  return (
    <aside
      css={expAsideStyle({
        color,
        background: secondBackground,
        isSmallScreen,
      })}
    >
      <ExpBullet
        isSmallScreen={isSmallScreen}
        selected={company.includes("J.P.")}
        onClick={() => !company.includes("J.P.") && onClick(0)}
      />
      <ExpBullet
        isSmallScreen={isSmallScreen}
        selected={company.includes("Built.io")}
        onClick={() => !company.includes("Built.io") && onClick(1)}
      />
      <ExpBullet
        isSmallScreen={isSmallScreen}
        selected={company.includes("I.B.M.")}
        onClick={() => !company.includes("I.B.M.") && onClick(2)}
      />
    </aside>
  )
}
