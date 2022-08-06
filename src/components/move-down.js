import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const MoveDownContainer = styled.div`
  position: absolute;
  bottom: 20vh;
  left: 50vw;
`

const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 5px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: moveDown 3s 0.5s infinite;

  &:before,
  :after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #d0b16b;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  &:first-child {
    animation: moveDown 3s 1.5s infinite;
  }

  &:nth-child(2) {
    animation: moveDown 3s 2.5s infinite;
  }

  @keyframes moveDown {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
`

const MoveDown = () => {
  return (
    <MoveDownContainer>
      <Chevron />
      <Chevron />
      <Chevron />
    </MoveDownContainer>
  )
}

export default MoveDown
