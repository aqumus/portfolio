import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavigationContainer = styled.div`
  height: 90vh;
  width: 18vw;
`

const StyledNav = styled.nav`
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

const Navigation = ({ className }) => (
  <NavigationContainer>
    <StyledNav className={className}>
      {links.map(({ to, text }, i) => (
        <Link key={i} to={to} activeStyle={linkActiveStyle}>
          {text}
        </Link>
      ))}
    </StyledNav>
  </NavigationContainer>
)

export default Navigation
