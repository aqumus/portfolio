import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const skillsContainerStyle = ({ background }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${background};
  overflow: hidden;
`

const headerStyle = css`
  position: absolute;
  align-self: flex-start;
  font-weight: bold;
  height: 100vh;
  width: 100vw;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillImage = styled.img`
  align-self: center;
  flex-grow: 2;
  justify-content: center;
  z-index: 1;
`

export const SkillDetails = ({
  imgSrc,
  header,
  background,
  headerClassName,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={skillsContainerStyle({ background })}>
      <header css={[headerStyle, headerClassName]}>
        {header.split(" ").map(text => (
          <p>{text}</p>
        ))}
      </header>
      <SkillImage src={imgSrc} alt={header} />
    </div>
  )
}
