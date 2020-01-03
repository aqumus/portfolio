import React from "react"

import SEO from "./seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import ResumeIcon from "./resume-icon"

const smallScreenStyle = css`
  font-size: 13px;
`

const AboutArticle = styled.article`
  flex-grow: 3;
  padding: 2vw;
  background: #cee3ea;
  box-shadow: 2px 2px 25px 0px #14282f;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.35em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #ead5ce;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cd9a89;
    outline: 1px solid white;
  }
`

const ResumeText = styled.span`
  margin-left: 5px;
`

const ResumeContainer = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`

const About = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <AboutArticle css={isSmallScreen && smallScreenStyle}>
      <h6>Hey there,</h6>
      <p>
        I am a full stack web developer based in <em>Mumbai</em>, where my core
        expertise is around front end technologies like HTLML5, CSS3, JS,
        React.js. My current job role involves developing web application based
        on the UX design.
      </p>
      <p>
        I have started my career as a &#10077;System Engineer&#10078; where I
        used to configure mainframe servers, network switches and storages for
        Data Center, primarily used as high availability nodes but soon realised
        my passion for coding and development which got me turned into a Web
        Developer.
      </p>

      <p>
        Javascript is my primary programming language, I like to follow coding
        standards, clean coding and love to deliver technical sessions. I
        believe in continuous learning and most of the time, you would usually
        find me busy exploring new framework, libraries or new technologies.
      </p>

      <p>
        My current area of interest is to be more proficient in backend
        technologies i.e creating web servers and system design, which could
        allow me to reach my goal of becoming a<em>Technical Architect</em>
      </p>

      <p>
        While I am not learning or coding
        <div>
          &#8226; I like to listen music - EDM, Hip Hop and old bollywood songs
        </div>
        <div> &#8226; Watch movies and TV shows</div>
        <div>&#8226; Play games and watch gameplays</div>
        <div>&#8226; Explore new places</div>
        <div>&#8226; Sleep</div>
      </p>

      <ResumeContainer href="./Aquib_Resumev5.1.pdf" download>
        <ResumeIcon size={30} />
        <ResumeText>My Resume</ResumeText>
      </ResumeContainer>
    </AboutArticle>
  )
}

export default About
