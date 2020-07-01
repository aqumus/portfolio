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
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${Palette.LIGHT_BACKGROUND};
  color: ${Palette.DARK};
  width: 65vw;
  position: relative;
  justify-content: center;
  min-width: ${HEADER_MIN_WIDTH};
`

const ContactLinkContainer = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 25px;
  min-width: ${HEADER_MIN_WIDTH};

  & svg:not(:last-child) {
    margin-right: 15px;
  }
`

const titleContainer = styled.div``

const Name = styled.span`
  font-size: 40px;
  font-family: "Frijole";
  align-self: center;
  margin: 50px 0 15px 0;
  line-height: 50px;
  text-align: center;
`

const Designation = styled.span`
  font-size: 30px;
  align-self: center;
  line-height: 40px;
`

const Separator = styled.hr`
  background: white;
  width: 5px;
  height: 100%;
`

const AboutArticle = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  line-height: 28px;
  color: ${Palette.DARK};
  padding: 10vh 5vw;
  padding-top: 10vh;
  justify-content: space-between;
`

const AboutSection = styled.section``

const Para = styled.p`
  margin-bottom: 15px;
`

const Bold = styled.bold`
  font-weight: bold;
  font-size: 28px;
  opacity: 0.8;
`

const HobbiesList = styled.ul`
  list-style: none;
  margin: 0;
`

const ListBullet = styled(Bullet)`
  margin-right: 15px;
  height: 12px;
`

const hobbies = [
  "Listening Music - EDM, HipHop, Bollywood.",
  "Watching movies and TV shows.",
  "Playing games.",
  "Reading Tech Blogs",
]

export const AboutNew = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <AboutContainer>
      <SEO
        title="Aquib Vadsaria Intro"
        description="Brief Intro, area of interest and hobbies"
      />
      <HeaderContainer>
        <IntroImage />
        <Name>Aquib Vadsaria</Name>
        <Designation>Web Developer</Designation>
        <ContactLinkContainer>
          <Twitter width={25} height={25} />
          <Gmail width={25} height={25} />
          <LinkedIn
            width={25}
            height={25}
            style={{
              position: "relative",
              top: "-2px",
            }}
          />
          <Github width={25} height={25} />
        </ContactLinkContainer>
      </HeaderContainer>
      <Separator />
      <AboutArticle>
        <AboutSection>
          <p>
            <Bold>Hey there,</Bold>
          </p>

          <p>
            I am a <Bold>Full stack web developer</Bold> based in{" "}
            <Bold>Mumbai</Bold>.
          </p>

          <p>
            I have started my career as a “System Engineer” where I used to
            configure mainframe servers, network switches and storages but soon
            realised my passion for development which got me turned into a Web
            Developer.
          </p>

          <p>
            My current area of interest is to be more proficient in server side
            technologies i.e creating web servers and system design.
          </p>

          <p>
            My <Bold>goal</Bold> is to become a <Bold>Technical Architect</Bold>
            .
          </p>
        </AboutSection>
        <section>
          <p>
            <Bold>Hobbies:</Bold>
          </p>
          <p>
            <HobbiesList>
              {hobbies.map(hobby => (
                <li>
                  <ListBullet />
                  {hobby}
                </li>
              ))}
            </HobbiesList>
          </p>
        </section>
      </AboutArticle>
    </AboutContainer>
  )
}
