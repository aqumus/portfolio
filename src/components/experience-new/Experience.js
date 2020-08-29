import React from "react"
import SEO from "../seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { ExperienceContainer } from "./ExperienceContainer"
import Palette from "../../palette"
import { NavigationNew } from "../navigation-new"

const expereinceContainerStyle = css`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  position: relative;
`

const expereinceStyle = ({ background }) => css`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 300vw;
`

const JPMorganExperience = {
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
  company: "J.P. Morgan",
  companyFirstHalf: "J.P.",
  designation: "Application Developer, Mumbai",
  designationFirstHalf: "Applicatio",
  duration: "Nov, 2016 - Current",
  renderDescription: () => {
    return (
      <>
        <p>
          Working on <emphasis>FX Trading platform</emphasis>.
        </p>
        <p>
          {" "}
          Migrating existing Flex application to HTML5,CSS3 and JS based web
          app.
        </p>
      </>
    )
  },
  technologyUsed:
    "React.js, Typescript, Webpack, Esnext, Rx.js, Highcharts, Material-ui, Selenium, Emotion, Eslint, react-testing-library, Selenium, mocha, jest.",
}

const builioExperience = {
  background: Palette.DARK,
  secondBackground: Palette.LIGHT_DARK,
  color: Palette.LIGHT,
  company: "Built.io",
  companyFirstHalf: "Bu",
  designation: "Web Developer, Mumbai",
  designationFirstHalf: "Web De",
  duration: "Aug, 2015 - Oct, 2016",
  renderDescription: () => {
    return (
      <>
        <p>
          Worked as a <emphasis>Full Stack Devloper</emphasis> on a{" "}
          <emphasis>Built.io Flow</emphasis> product which is a service
          orchestration tool used to create user defined workflows.
        </p>
        <p>Optimised initial app loading time from mins to few seconds.</p>
      </>
    )
  },
  technologyUsed:
    "Node.js, Express, MongoDB, AWS S3, AWS EC2, React.js, Flux, Gulp, Grunt, ES6, SASS, mocha, jasmine, lodash, Angular.js, Chai, Postman.",
}

const IBMExperience = {
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
  company: "I.B.M",
  companyFirstHalf: "I.B",
  designation: "System Engineer, Mumbai",
  designationFirstHalf: "System ",
  duration: "Jul, 2012 - Jul, 2015",
  renderDescription: () => {
    return (
      <>
        <p>
          Worked as a <emphasis>System Engineer</emphasis> for various IBM
          clients namely Kotak Bank, ICICI bank, Vodafone, Airtel etc.
        </p>
        <p>
          Worked on OS virtualisation, implemented & configured servers, network
          swicthes, Mid range storages.
        </p>
      </>
    )
  },
  technologyUsed:
    "IBM System X, Dell and HP DL servers, IBM Flex storwise and DS storages, Cisco network and Fiber siwtches, Redhat/ OpenSuse OS, Vmware ESX, Citrix Hypervisor.",
}

export const Experience = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <div css={expereinceContainerStyle} id="my-experience">
      <SEO
        title="Aquib Vadsaria Experience"
        description="Experience of Aquib Vadsaria with current employer being J.P. Morgan and past companies Build.io and IBM"
      />
      <div css={expereinceStyle}>
        <ExperienceContainer {...JPMorganExperience} />
        <ExperienceContainer {...builioExperience} />
        <ExperienceContainer {...IBMExperience} />
      </div>
    </div>
  )
}
