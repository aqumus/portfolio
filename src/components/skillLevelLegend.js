import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import { skillLevel } from "../util"

const Svg = styled.svg`
  position: fixed;
  top: 10vh;
  right: 1vw;
`

const SkillLevelLegend = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const width = isSmallScreen ? "5vw" : "3vw"
  const height = isSmallScreen ? 300 : 400
  const viewPortWidth = isSmallScreen ? "40" : "50"
  const viewPortHeight = isSmallScreen ? "40" : "50"
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height="45vh"
      viewBox={`-5 150 ${viewPortWidth} ${viewPortHeight}`}
    >
      <text x={-3} y={-5} width={width} fontSize="14px" fill="white">
        <tspan x={-3} dy={0}>
          Skill
        </tspan>
        <tspan x={-3} dy={18}>
          level
        </tspan>
      </text>
      {skillLevel.map((color, i) => (
        <g>
          <circle cx={12} cy={40 + i * 35} r={12} fill={color}></circle>
          <text
            fill={i <= 1 || i >= 8 ? "white" : "black"}
            x={i === 9 ? 5 : 8}
            y={44 + i * 35}
            fontSize="12px"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </Svg>
  )
}

export default SkillLevelLegend
