import React from "react"

import SEO from "./seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import Palette from "../palette"

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 60vw;
  max-width: 650px;
  height: 60px;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 5px;
`

const NavItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  line-height: 100%;
  color: ${({ color }) => color};
  font-weight: ${({ inView }) => (inView ? "bold" : "normal")};
  border-bottom: ${({ inView, color }) =>
    inView ? `2px solid ${color}` : "none"};
`

const Svg = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Drawer = props => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <g stroke={props.strokeColor} strokeWidth={2}>
        <path d="M10.15 10h9.6M10.15 14.206h9.768M10 18.325h9.751" />
        <circle cx={15} cy={15} r={14} />
      </g>
    </Svg>
  )
}

export const NavigationNew = ({ color, inView }) => {
  const isSmallScreen = useSmallScreenMediaQuery()

  if (isSmallScreen) {
    return <Drawer strokeColor={color} />
  }
  return (
    <NavContainer>
      <NavItem color={color} inView={inView === "Home"}>
        Home
      </NavItem>
      <NavItem color={color} inView={inView === "About"}>
        About
      </NavItem>
      <NavItem color={color} inView={inView === "Skills"}>
        Skills
      </NavItem>
      <NavItem color={color} inView={inView === "Experience"}>
        Experience
      </NavItem>
    </NavContainer>
  )
}
