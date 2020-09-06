import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

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
import { NavigationNew } from "./navigation-new"
import { createHomeTimeLine } from "../timelines"
import { Home } from "./home"

const HEADER_MIN_WIDTH = "35vw"

const AboutContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${({ isSmallScreen }) => (isSmallScreen ? "column" : "row")};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${Palette.LIGHT};
  // scroll-snap-align: start;
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
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "0px" : "60px")};
`

const AboutSection = styled.section`
  margin-bottom: ${({ isSmallScreen }) => (isSmallScreen ? "3vh" : "5vh")};
`

const Para = styled.p`
  margin-bottom: ${({ isSmallScreen }) => (isSmallScreen ? "16px" : "1.45rem")};
  overflow: hidden;
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
  const homeTimeLine = useRef(createHomeTimeLine("my-about"))
  const iconSize = isSmallScreen ? 15 : 30
  const listBulletSize = isSmallScreen ? 12 : 15
  const contactIconBottom = isSmallScreen ? "25px" : "6vh"

  useEffect(() => {
    if (isSmallScreen === undefined) {
      return
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#my-about",
          // pin: true, // pin the trigger element while active
          start: "top 5%", // when the top of the trigger hits the top of the viewport
          // end: "+=500", // end after scrolling 500px beyond the start
          // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // snap: {
          //   snapTo: 0.2, // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          // },
          scroller: "#landing",
        },
      })
      .to("#intro-image", {
        x: "0%",
      })
      .fromTo(
        "#intro-title > span",
        { x: "100%", autoAlpha: 0 },
        { x: "0%", autoAlpha: 1 },
        "<"
      )
      .staggerFromTo(
        "#my-about-contact > svg",
        0.5,
        { bottom: 0, autoAlpha: 0 },
        { bottom: contactIconBottom, autoAlpha: 1 },
        0.05,
        "<"
      )
      .staggerFromTo(
        "#my-about .word",
        0.5,
        { y: "-100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
        },
        0.014,
        "-=0.5"
      )
      .staggerFromTo(
        "#my-about .items",
        0.5,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
        },
        0.034
      )
      .staggerFromTo(
        'nav[data-inview="About"] > span',
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "<"
      )
  }, [isSmallScreen])
  return (
    <AboutContainer isSmallScreen={isSmallScreen} id="my-about">
      <SEO
        title="Aquib Vadsaria Intro"
        description="Brief Intro, area of interest and hobbies"
      />
      <NavigationNew
        inView={"About"}
        color={Palette.DARK}
        homeTimeLine={homeTimeLine.current}
        parentId={"my-about"}
      />
      <Home
        overlay={true}
        homeTimeLine={homeTimeLine.current}
        parentId={"my-about"}
      />
      <HeaderContainer isSmallScreen={isSmallScreen}>
        <IntroImage />
        <HeaderTextContainer id="intro-title">
          <Name isSmallScreen={isSmallScreen}>Aquib Vadsaria</Name>
          <Designation isSmallScreen={isSmallScreen}>Web Developer</Designation>
          <ContactLinkContainer
            id="my-about-contact"
            isSmallScreen={isSmallScreen}
          >
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
          <Para isSmallScreen={isSmallScreen} data-splitting="chars">
            <Bold>Hey there,</Bold>
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            I am a <Bold>Full stack web developer</Bold> based in{" "}
            <Bold>Mumbai</Bold>.
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            I have started my career as a “System Engineer” where I used to
            configure mainframe servers, network switches and storages but soon
            realised my passion for development which got me turned into a Web
            Developer.
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            My current area of interest is to be more proficient in server side
            technologies i.e creating web servers and system design.
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            My <Bold>goal</Bold> is to become a <Bold>Technical Architect</Bold>
            .
          </Para>
        </AboutSection>
        <section>
          <Para isSmallScreen={isSmallScreen} data-splitting="chars">
            <Bold>Hobbies:</Bold>
          </Para>
          <Para isSmallScreen={isSmallScreen}>
            <HobbiesList>
              {hobbies.map(hobby => (
                <li data-splitting="items">
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
