import React, { useEffect, useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Palette from "../palette"
import DesktopLightSvg from "../images/desktop_light.svg"
import MobileLightSvg from "../images/mobile_light.svg"
// import { useSprings, animated, interpolate } from "react-spring"

import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.DARK};

  #loading-image {
    animation: rotateImage 3s linear infinite;
  }

  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(15deg);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const LoadingText = styled.div`
  position: absolute;
  z-index: 1;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? "25px" : "85px")};
  font-family: "Frijole";
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${Palette.DARK};
`

const Loader = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  // const textStyle = getTextStyle(isSmallScreen)

  return (
    <LoaderContainer>
      <img
        id="loading-image"
        src={isSmallScreen ? MobileLightSvg : DesktopLightSvg}
      />
      <LoadingText isSmallScreen={isSmallScreen}>Loading</LoadingText>
    </LoaderContainer>
  )
}

export default Loader
