import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import ResumeIcon from "../components/resume-icon"

const smallScreenStyle = css`
  font-size: 13px;
`

const nameStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const AboutArticle = styled.article`
  color: transparent;
  text-shadow: 0px 0px 20px white;
  animation: blurOutEffect 0.5s ease-in-out 0s 1 normal forwards;
`

const ResumeText = styled.span`
  margin-left: 5px;
`

const ResumeContainer = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
`

const About = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <Layout page="About">
      <SEO title="About Aquib Vadsaria" />
      <AboutArticle css={isSmallScreen && smallScreenStyle}>
        <h4>Hey there,</h4>
        <p>
          I am <h6 css={nameStyle}>Aquib Vadsaria</h6> born, brought up and
          based in <i>Mumbai</i>, professional web developer by choice where my
          core expertise is around front end technologies like HTLML5, CSS3, JS,
          React.js. My current job role involves developing web application
          based on the UX design.
        </p>
        <p>
          I have started my career as a &#10077;System Engineer&#10078; where I
          was configuring mainframe servers, network switches and storages for
          Data Center, primarily used as high availability nodes but soon
          realised my passion for coding and development which got me turned
          into a Web Developer.
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
            &#8226; I like to listen music - EDM, Hip Hop and old bollywood
            songs
          </div>
          <div> &#8226; Watch movies and TV shows</div>
          <div>&#8226; Play games and watch gameplays</div>
          <div>&#8226; Explore new places</div>
          <div>&#8226; Sleep</div>
        </p>

        <ResumeContainer href="./static/Aquib_Resumev5.pdf" download>
          <ResumeIcon size={30} />
          <ResumeText>My Resume</ResumeText>
        </ResumeContainer>
      </AboutArticle>
    </Layout>
  )
}

export default About
