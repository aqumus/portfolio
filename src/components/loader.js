import React, { useEffect, useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import Palette from "../palette"
// import { useSprings, animated, interpolate } from "react-spring"

import MoveDown from "../components/move-down"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: ${Palette.DARK};
  z-index: 11;
`

const svgStyle = isSmallScreen => css`
  font-size: ${isSmallScreen ? "9vw" : "4vw"};
  font-family: "Michroma";
  width: 100vw;
  height: 100vh;
`

const getTextStyle = isSmallScreen => css`
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-dashoffset: 0%;
  stroke-width: ${isSmallScreen ? "1.5px" : "3.5px"};
  animation: stroke-offset 6s infinite linear;

  &:nth-child(1) {
    stroke: #c69748;
    animation-delay: -1;
  }

  &:nth-child(2) {
    stroke: #33c59b;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    stroke: #bd561a;
    animation-delay: -3s;
  }

  &:nth-child(4) {
    stroke: #d0b16b;
    animation-delay: -4s;
  }

  &:nth-child(5) {
    stroke: #179fa8;
    animation-delay: -5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
`

const loadingCircleStyle = isSmallScreen => css`
  circle {
    stroke: none;
    cy: ${isSmallScreen ? "65%" : "80%"};
    r: ${isSmallScreen ? "0.8vw" : "0.2vw"};
  }

  circle:nth-child(1) {
    animation: c 2s ease-out 0.05s infinite;
  }

  circle:nth-child(2) {
    animation: c 2s ease-out 0.1s infinite;
  }

  circle:nth-child(3) {
    animation: c 2s ease-out 0.15s infinite;
  }

  circle:nth-child(4) {
    animation: c 2s ease-out 0.2s infinite;
  }

  circle:nth-child(5) {
    animation: c 2s ease-out 0.25s infinite;
  }

  @keyframes c {
    0% {
      r: 0.3vw;
      cx: 0%;
      opacity: 0%;
    }
    50% {
      r: 0.5vw;
      cx: 50%;
      opacity: 1;
    }
    100% {
      r: 0.3vw;
      cx: 100%;
      opacity: 0;
    }
  }
`

const Loader = ({ isLoading }) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const textStyle = getTextStyle(isSmallScreen)

  return (
    isLoading && (
      <LoaderContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          css={svgStyle(isSmallScreen)}
        >
          <>
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="40%">
                Aquib Vadsaria
              </text>
              <text
                text-anchor="middle"
                x="65%"
                y={isSmallScreen ? "50%" : "55%"}
              >
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
            <g css={loadingCircleStyle(isSmallScreen)}>
              <circle fill="#bd561a" />
              <circle fill="#c69748" />
              <circle fill="#d0b16b" />
              <circle fill="#33c59b" />
              <circle fill="#179fa8" />
            </g>
          </>
        </svg>
      </LoaderContainer>
    )
  )
}

export default Loader
