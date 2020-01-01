import React from "react"
import styled from "@emotion/styled"
import IntroImage from "../components/intro-image"
import SEO from "../components/seo"
import About from "../components/about"

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  background: #89bccd;
  display: flex;
  overflow: scroll;
  flex-direction: row;
  padding: 5vh 5vw;
  height: 100vh;
`

const Intro = () => {
  return (
    <StyledContainer>
      <SEO
        title="Aquib Vadsaria Intro"
        description="Brief Intro, area of interest and hobbies"
      />
      <IntroImage />
      <About />
    </StyledContainer>
  )
}

export default Intro
