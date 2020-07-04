import React from "react"

import SEO from "./seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import IntroImage from "./intro-image"
import ResumeIcon from "./resume-icon"
import { Twitter } from "./Icons/Twitter"
import { Gmail } from "./Icons/Gmail"
import { LinkedIn } from "./Icons/Linkedin"
import { Github } from "./Icons/Github"
import { Bullet } from "./Icons/Bullet"
import Palette from "../palette"

const HEADER_MIN_WIDTH = "35vw"

const AboutContainer = styled.div`
  display: flex;
  flex-direction: ${({ isSmallScreen }) => (isSmallScreen ? "column" : "row")};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${Palette.LIGHT};
`

const HeaderContainer = styled.header(({ isSmallScreen }) => {
  return `
    display: flex;
    flex-direction: ${isSmallScreen ? "row" : "column"};
    background-color: ${Palette.LIGHT_BACKGROUND};
    color: ${Palette.DARK};
    width: ${isSmallScreen ? "100vw" : "65vw"};
    position: relative;
    justify-content: center;
    min-width: ${HEADER_MIN_WIDTH};
    min-height: ${isSmallScreen ? "200px" : "100vh"};
    max-height: ${isSmallScreen ? "220px" : "100vh"};
    `
})

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContactLinkContainer = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: ${({ isSmallScreen }) => (isSmallScreen ? "25px" : "6vh")};
  min-width: ${HEADER_MIN_WIDTH};

  & svg:not(:last-child) {
    margin-right: ${({ isSmallScreen }) => (isSmallScreen ? "20px" : "30px")};
  }
`

const titleContainer = styled.div``

const Name = styled.span`
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? "21px" : "38px")};
  font-family: "Frijole";
  align-self: center;
  text-align: center;
`

const Designation = styled.span`
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? "18px" : "30px")};
  align-self: center;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "5px" : "2vh")};
`

const verticalSeparator = css`
  background: white;
  width: 5px;
  height: 100%;
`

const horizontalSeparator = css`
  width: 100vw;
  border-top: 2px solid white;
  margin: 0px;
`

const AboutArticle = styled.article`
  display: flex;
  flex-direction: column;
  font-size: ${({ isSmallScreen }) => (isSmallScreen ? "16px" : "22px")};
  color: ${Palette.DARK};
  padding: ${({ isSmallScreen }) => (isSmallScreen ? "4vh 5vw" : "10vh 5vw")};
  height: 100vh;
  overflow-y: auto;
  justify-content: space-between;
`

const AboutSection = styled.section`
  margin-bottom: ${({ isSmallScreen }) => (isSmallScreen ? "3vh" : "5vh")};
`

const Para = styled.p`
  margin-bottom: ${({ isSmallScreen }) => (isSmallScreen ? "16px" : "1.45rem")};
`

const Bold = styled.bold`
  font-weight: bold;
  opacity: 0.8;
`

const HobbiesList = styled.ul`
  list-style: none;
  margin: 0;
`

const ListBullet = styled(Bullet)`
  margin-right: ${({ isSmallScreen }) => (isSmallScreen ? "10px" : "15px")};
`

const hobbies = [
  "Listening Music - EDM, HipHop, Bollywood.",
  "Watching movies and TV shows.",
  "Playing games.",
  "Reading Tech Blogs",
]

export const AboutNew = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const iconSize = isSmallScreen ? 15 : 30
  const listBulletSize = isSmallScreen ? 12 : 15
  return (
    <AboutContainer isSmallScreen={isSmallScreen}>
      <SEO
        title="Aquib Vadsaria Intro"
        description="Brief Intro, area of interest and hobbies"
      />
      <HeaderContainer isSmallScreen={isSmallScreen}>
        <IntroImage />
        <HeaderTextContainer>
          <Name isSmallScreen={isSmallScreen}>Aquib Vadsaria</Name>
          <Designation isSmallScreen={isSmallScreen}>Web Developer</Designation>
          <ContactLinkContainer isSmallScreen={isSmallScreen}>
            <Twitter width={iconSize} height={iconSize} />
            <Gmail width={iconSize} height={iconSize} />
            <LinkedIn
              width={iconSize}
              height={iconSize}
              style={{
                position: "relative",
                top: "-2px",
              }}
            />
            <Github width={iconSize} height={iconSize} />
          </ContactLinkContainer>
        </HeaderTextContainer>
      </HeaderContainer>
      <hr css={isSmallScreen ? horizontalSeparator : verticalSeparator} />
      <AboutArticle isSmallScreen={isSmallScreen}>
        <AboutSection isSmallScreen={isSmallScreen}>
          <Para isSmallScreen={isSmallScreen}>
            <Bold>Hey there,</Bold>
          </Para>

          <Para isSmallScreen={isSmallScreen}>
            I am a <Bold>Full stack web developer</Bold> based in{" "}
            <Bold>Mumbai</Bold>.
          </Para>

          <Para isSmallScreen={isSmallScreen}>
            I have started my career as a “System Engineer” where I used to
            configure mainframe servers, network switches and storages but soon
            realised my passion for development which got me turned into a Web
            Developer.
          </Para>

          <Para isSmallScreen={isSmallScreen}>
            My current area of interest is to be more proficient in server side
            technologies i.e creating web servers and system design.
          </Para>

          <Para isSmallScreen={isSmallScreen}>
            My <Bold>goal</Bold> is to become a <Bold>Technical Architect</Bold>
            .
          </Para>
        </AboutSection>
        <section>
          <Para isSmallScreen={isSmallScreen}>
            <Bold>Hobbies:</Bold>
          </Para>
          <Para isSmallScreen={isSmallScreen}>
            <HobbiesList>
              {hobbies.map(hobby => (
                <li>
                  <ListBullet
                    width={listBulletSize}
                    height={listBulletSize}
                    isSmallScreen={isSmallScreen}
                  />
                  {hobby}
                </li>
              ))}
            </HobbiesList>
          </Para>
        </section>
      </AboutArticle>
    </AboutContainer>
  )
}
