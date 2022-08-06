import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { links } from "../util"

const navigationContainerIndex = css`
  height: 90vh;
  width: 18vw;
`

const navIndex = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 700px;
  align-items: flex-end;
  height: 17vh;
    a {
      font-size: 2.6vw;
      display: block;
      line-height: 5vh;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: transparent;
      text-shadow: 0px 0px 4px white;
      transition: all 0.2s ease-in-out;
      :hover {
        text-shadow: 0px 0px 1px white;
        padding-right: 5px;
      }
      @media only screen and (max-width: 768px) {
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
  paddingRight: "5px",
}

const Navigation = ({ page }) => (
  <div css={navigationContainerIndex}>
    <nav css={navIndex}>
      {links.map(({ to, text }, i) => (
        <Link key={i} id={text} to={to} activeStyle={linkActiveStyle}>
          {text}
        </Link>
      ))}
    </nav>
  </div>
)

export default Navigation
