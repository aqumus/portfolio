import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { skillLevel } from "../util"

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Svg = styled.svg`
  font: 4vw "Michroma";
  width: 100vw;
  height: 100vh;
`

const textStyle = css`
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 7s infinite linear;

  &:nth-child(1) {
    stroke: #d0b16b;
    animation-delay: -1;
  }

  &:nth-child(2) {
    stroke: #33c59b;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    stroke: #179fa8;
    animation-delay: -3s;
  }

  &:nth-child(4) {
    stroke: #067e90;
    animation-delay: -4s;
  }

  &:nth-child(5) {
    stroke: #015e71;
    animation-delay: -5s;
  }
`

const Loader = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const width = isSmallScreen ? "5vw" : "3vw"
  const height = isSmallScreen ? 300 : 400
  const viewPortWidth = isSmallScreen ? "35" : "50"
  const viewPortHeight = isSmallScreen ? "40" : "50"
  return (
    <LoaderContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="40%">
            Aquib Vadsaria
          </text>
          <text text-anchor="middle" x="65%" y="65%">
            Portfolio
          </text>
        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" css={textStyle} />
          <use xlinkHref="#s-text" css={textStyle} />
          <use xlinkHref="#s-text" css={textStyle} />
          <use xlinkHref="#s-text" css={textStyle} />
          <use xlinkHref="#s-text" css={textStyle} />
        </g>
      </Svg>
    </LoaderContainer>
  )
}

export default Loader
