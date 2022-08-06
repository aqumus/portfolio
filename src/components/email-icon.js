import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

const Svg = styled.svg`
  fill: black;
  cursor: pointer;
`

const EmailIcon = ({ size }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={size}
    height={size}
    viewBox="0 0 381.051 381.051"
    onClick={() => (window.location.href = "mailto:vadsaria.ak@gmail.com")}
  >
    <g>
      <path d="M366.928,56.035H14.124C6.324,56.035,0,62.358,0,70.158v240.733c0,7.799,6.324,14.124,14.124,14.124h352.804   c7.799,0,14.123-6.325,14.123-14.124V70.158C381.051,62.358,374.727,56.035,366.928,56.035z M28.247,96.901l95.947,65.465   L28.247,273.039V96.901L28.247,96.901z M190.529,173.428L59.88,84.281h261.29L190.529,173.428z M147.69,178.395l34.875,23.799   c2.407,1.634,5.187,2.454,7.965,2.454c2.781,0,5.559-0.82,7.958-2.454l34.881-23.799L336,296.767H45.068L147.69,178.395z    M256.863,162.366l95.941-65.465v176.123L256.863,162.366z" />
    </g>
  </Svg>
)

export default EmailIcon
