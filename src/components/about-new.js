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
import { useSplittingLoaded } from "../hooks/useSplitting"

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
    width: ${isSmallScreen ? "100vw" : "50vw"};
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
  justify-content: space-around;
  margin-top: ${({ isSmallScreen }) => (isSmallScreen ? "0px" : "60px")};
`

const AboutSection = styled.section``

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

const iconStyle = css`
  cursor: pointer;
`

const hobbies = [
  "Exploring frameworks",
  "Reading Tech blogs",
  "Listening Music",
  "Playing games.",
]

export const AboutNew = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const isSplittingLoaded = useSplittingLoaded()
  const homeTimeLine = useRef(createHomeTimeLine("my-about"))
  const iconSize = isSmallScreen ? 15 : 30
  const listBulletSize = isSmallScreen ? 12 : 15
  const contactIconBottom = isSmallScreen ? "25px" : "6vh"

  useEffect(() => {
    if (isSmallScreen === undefined || !isSplittingLoaded) {
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
        0.005,
        "-=0.5"
      )
      .staggerFromTo(
        'nav[data-inview="About"] > span',
        0.5,
        { scale: 0 },
        { scale: 1 },
        0.054,
        "<"
      )
      .fromTo(
        `#my-about [data-id="mobile-drawer"]`,
        { scale: 0 },
        { scale: 1 },
        "<"
      )
  }, [isSmallScreen, isSplittingLoaded])
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
            <Twitter
              css={iconStyle}
              width={iconSize}
              height={iconSize}
              onClick={() => window.open("https://twitter.com/aqumus29")}
            />
            <Gmail
              css={iconStyle}
              width={iconSize}
              height={iconSize}
              onClick={() =>
                (window.location.href = "mailto:vadsaria.ak@gmail.com")
              }
            />
            <LinkedIn
              css={iconStyle}
              width={iconSize}
              height={iconSize}
              style={{
                position: "relative",
                top: "-2px",
              }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/aquib-vadsaria/")
              }
            />
            <Github
              css={iconStyle}
              width={iconSize}
              height={iconSize}
              onClick={() => window.open("https://github.com/aqumus")}
            />
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
            Started my career as “System Engineer” but soon realized my passion
            for web development since then I bring UX/UI designs to life.
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            My strong hold is to always have that hunger for learning, self
            driven and highly productive.
            <br />I like to learn new frameworks, programming languages, read
            tech blogs, listen music and play games.
          </Para>

          <Para isSmallScreen={isSmallScreen} data-splitting="words">
            My goal is to become a <Bold>Technical Architect</Bold>.
          </Para>
        </AboutSection>
      </AboutArticle>
    </AboutContainer>
  )
}
