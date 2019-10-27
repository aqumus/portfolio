import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

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
    }
  }
  &:hover a:not(:hover) {
    text-shadow: 0px 0px 6px white;
  }
`

const linkActiveStyle = {
  textShadow: "0px 0px 1px white",
  textOrientation: "upright",
  transform: "rotate(0deg)",
}

const links = [
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/skills",
    text: "Skills",
  },
  {
    to: "/experience",
    text: "Experience",
  },
]

const SideNavigation = () => (
  <div css={navigationContainerPage}>
    <nav css={navPage}>
      {links.map(({ to, text }, i) => (
        <Link key={i} to={to} activeStyle={linkActiveStyle}>
          {text}
        </Link>
      ))}
    </nav>
  </div>
)

export default SideNavigation
