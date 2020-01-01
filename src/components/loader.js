import React, { useEffect, useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSprings, animated, interpolate } from "react-spring"

import MoveDown from "../components/move-down"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: transparent;
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

const commonRectPieceStyle = {
  width: "11vw",
  height: "11vh",
  fill: "#1a343d",
  stroke: "none",
}

const randomDeg = () => Math.floor(Math.random() * 150)

const getRectSpring = () => {
  let rects = new Array(100)
  let rectIndex = 99
  for (let row = 0; row < 100; row += 10) {
    for (let col = 0; col < 100; col += 10) {
      const randDeg = randomDeg()
      const r = randDeg * (randDeg % 2 === 0 ? -1 : 1)
      rects[rectIndex] = {
        from: {
          x1: `${row}%`,
          y1: `${col}%`,
          r: 0,
          fill: "#14282f",
        },
        to: {
          r,
          y1: "150%",
          delay: randDeg * 5,
          fill: "#376f82",
        },
      }
      rectIndex--
    }
  }
  return rects
}

const RectPiecesSpring = getRectSpring()

const Loader = ({ isLoading }) => {
  const [hideLoader, setLoader] = useState(false)
  const isSmallScreen = useSmallScreenMediaQuery()
  const textStyle = getTextStyle(isSmallScreen)
  const [springs, setSprings] = useSprings(RectPiecesSpring.length, i => ({
    ...RectPiecesSpring[i].from,
    onRest: iq => {
      // set the loader to true to remove the Loader component from DOM
      if (i === 99 && iq.y1 === "150%") {
        setTimeout(() => setLoader(true), 550)
      }
    },
  }))

  useEffect(() => {
    if (isLoading) return
    setSprings(i => ({ ...RectPiecesSpring[i].to }))
  }, [isLoading])

  if (hideLoader) {
    return null
  }

  return (
    <LoaderContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        css={svgStyle(isSmallScreen)}
      >
        {springs.map(({ x1, y1, r, ...restStyles }) => (
          <animated.rect
            style={{
              ...commonRectPieceStyle,
              ...restStyles,
              transform: interpolate(
                [x1, y1, r],
                (x, y, r) => `translate3d(${x}, ${y}, 0) rotate(${r}deg)`
              ),
            }}
          />
        ))}

        {isLoading && (
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
        )}
      </svg>
    </LoaderContainer>
  )
}

export default Loader
