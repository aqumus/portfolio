import React, { useEffect, useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSprings, animated, interpolate } from "react-spring"

import MoveDown from "../components/move-down"
import SideNavigation from "../components/side-navigation"
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

const Svg = styled.svg`
  font: 4vw "Michroma";
  width: 100vw;
  height: 100vh;
`

const getTextStyle = isSmallScreen => css`
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 29%;
  stroke-dashoffset: 0%;
  stroke-width: ${isSmallScreen ? "1.2px" : "4px"};
  animation: stroke-offset 8s infinite linear;

  &:nth-child(1) {
    stroke: #c69748;
    animation-delay: -0.5s;
  }

  &:nth-child(2) {
    stroke: #33c59b;
    animation-delay: -1.5s;
  }

  &:nth-child(3) {
    stroke: #bd561a;
    animation-delay: -2.5s;
  }

  &:nth-child(4) {
    stroke: #d0b16b;
    animation-delay: -3.5s;
  }

  &:nth-child(5) {
    stroke: #179fa8;
    animation-delay: -4.5s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }
`

const GLoadingCircle = styled.g`
  circle {
    stroke: none;
    cy: 80%;
    r: 0.2vw;
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

const SvgContainerRect = styled.rect`
  x: 0;
  y: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  fill: #f2a191;
`

const commonRectPieceStyle = {
  width: "50vw",
  height: "50vh",
  fill: "#072b37",
}

const RectPiecesSpring = [
  {
    from: { x1: "0%", y1: "0%", r: 0, opacity: 1 },
    to: { r: 40, y1: "150%", opacity: 0 },
  },
  {
    from: { x1: "50%", y1: "0%", r: 0, opacity: 1 },
    to: { r: -45, y1: "250%", opacity: 0 },
  },
  {
    from: { x1: "0%", y1: "50%", r: 0, opacity: 1 },
    to: { r: 40, y1: "150%", opacity: 0 },
  },
  {
    from: { x1: "50%", y1: "50%", r: 0, opacity: 1 },
    to: { r: -45, y1: "150%", opacity: 0 },
  },
]

const Loader = ({ isLoading }) => {
  const [hideLoader, setLoader] = useState(false)
  const isSmallScreen = useSmallScreenMediaQuery()
  const viewPortWidth = isSmallScreen ? "250" : "50vw"
  const viewPortHeight = isSmallScreen ? "210" : ""
  const textStyle = getTextStyle(isSmallScreen)
  const [springs, setSprings] = useSprings(4, i => ({
    ...RectPiecesSpring[i].from,
    config: { duration: 500 },
    onRest: iq => {
      if (i === 3 && iq.opacity === 0) {
        setTimeout(() => setLoader(true), 750)
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
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100vw"
        height="100vh"
        viewBox={`0 0 ${viewPortWidth} ${viewPortHeight}`}
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
              <text text-anchor="middle" x="65%" y="55%">
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
            <GLoadingCircle>
              <circle cy="80%" fill="#bd561a" />
              <circle cy="80%" fill="#c69748" />
              <circle cy="80%" fill="#d0b16b" />
              <circle cy="80%" fill="#33c59b" />
              <circle cy="80%" fill="#179fa8" />
            </GLoadingCircle>
          </>
        )}
      </Svg>
      {/* {!isLoading && <MoveDown />} */}
    </LoaderContainer>
  )
}

export default Loader
