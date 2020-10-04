import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { links } from "../util"

const navigationContainerPage = css`
  height: 85vh;
  width: 3vw;
  min-width: 40px;
`

const navPage = css`
  display: flex;
  flex-direction: row;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
    a {
      font-size: 3vh;
      transform : rotate(180deg);
      display: block;
      line-height: 4vh;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: transparent;
      text-shadow: 0px 0px 4px white;
      transition: all 0.2s ease-in-out;
      :hover {
        text-shadow: 0px 0px 1px white;
      }
      @media only screen and (max-width: 768px) {
        text-shadow: 0px 0px 2px white;
      }
    }
  }
  &:hover a:not(:hover) {
    text-shadow: 0px 0px 6px white;
    @media only screen and (max-width: 768px) {
      text-shadow: 0px 0px 2px white;
    }
  }
`

const linkActiveStyle = {
  textShadow: "0px 0px 1px white",
  textOrientation: "upright",
  transform: "rotate(0deg)",
  borderRight: "2px outset white",
}

const SideNavigation = () => (
  <div css={navigationContainerPage}>
    <nav css={navPage}>
      {links.map(({ to, text }, i) => (
        <Link
          key={i}
          to={to}
          id={text}
          activeStyle={linkActiveStyle}
          partiallyActive={true}
        >
          {text}
        </Link>
      ))}
    </nav>
  </div>
)

export default SideNavigation
