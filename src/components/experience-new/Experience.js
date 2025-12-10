import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { ExperienceContainer } from "./ExperienceContainer"
import Palette from "../../palette"

const expereinceContainerStyle = css`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  position: relative;
  scroll-snap-align: start;
`

const experienceATag = css`
  color: ${Palette.LIGHT} !important;
  font-weight: bold;
`

const expereinceStyle = ({ background }) => css`
  width: 500vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`

const LiveLikeExperiencePrincipal = {
  containerId: "experience-livelike-principal",
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
  company: "LiveLike",
  companyFirstHalf: "Liv",
  designation: "Principal Engineer, Mumbai",
  designationFirstHalf: "Principa",
  duration: "Aug, 2023 - Current",
  renderDescription: () => {
    return (
      <>
        <p>
          Working on <a css={experienceATag} href="https://livelike.com/livelike-launches-genie-a-multi-agent-ai-assistant-to-transform-interactive-content-workflows/">LiveLike Genie</a>
        </p>
        <p>
          Developing autonomous Agentic AI solution to automate content creation and management through LiveLike's engagement platform
        </p>
      </>
    )
  },
  technologyUsed:
    "Langgraph, Langchain, Autogen, AWS Bedrock, PostgresSQL, Redis, RAG pipeline, Pheonix Arize Observability, Anthropic Claude, Python, Typescript, MCP, Next.js, etc.",
}

const LiveLikeExperienceLead = {
  containerId: "experience-livelike-lead",
  background: Palette.DARK,
  secondBackground: Palette.LIGHT_DARK,
  color: Palette.LIGHT,
  company: "LiveLike",
  companyFirstHalf: "Liv",
  designation: "Technical Lead, Mumbai",
  designationFirstHalf: "Technica",
  duration: "Oct, 2021 - July 2023",
  renderDescription: () => {
    return (
      <>
        <p>
          Working on an <a css={experienceATag} href="https://livelike.com/">Engagement platform</a>{" "}
          for client like Canal+, Chelsea FC, Fifa+, Coca Cola, NBA etc.
        </p>
        <p>
          {" "}
          Designing and developing enagement related features such as chat,
          interactive widgets and gamification based features
        </p>
      </>
    )
  },
  technologyUsed:
    "Web Components, Lit.js, Typescript, Rollup, Jest, Python, Django, AWS, Heroku, PostgresSQL, etc.",
}

const JPMorganExperience = {
  containerId: "experience-jp-morgan",
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
  company: "J.P. Morgan",
  companyFirstHalf: "J.P.",
  designation: "Application Developer, Mumbai",
  designationFirstHalf: "Applicatio",
  duration: "Nov, 2016 - Oct, 2021",
  renderDescription: () => {
    return (
      <>
        <p>
          Working on <emphasis>FX Trading platform</emphasis>.
        </p>
        <p>
          {" "}
          Migrated existing Flex application to HTML5,CSS3 and JS based web app.
        </p>
      </>
    )
  },
  technologyUsed:
    "React.js, Typescript, Webpack, Esnext, Rx.js, Highcharts, Material-ui, Selenium, Emotion, Eslint, react-testing-library, Selenium, mocha, jest.",
}

const builioExperience = {
  containerId: "experience-builtio",
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
  containerId: "experience-ibm",
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
  company: "I.B.M.",
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
  return (
    <div css={expereinceContainerStyle} id="my-experience">
      <div css={expereinceStyle}>
        <ExperienceContainer {...LiveLikeExperiencePrincipal} />
        <ExperienceContainer {...LiveLikeExperienceLead} />
        <ExperienceContainer {...JPMorganExperience} />
        <ExperienceContainer {...builioExperience} />
        <ExperienceContainer {...IBMExperience} />
      </div>
    </div>
  )
}
