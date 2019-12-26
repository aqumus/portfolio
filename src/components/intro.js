import React from "react"
import styled from "@emotion/styled"

import IntroImage from "../components/intro-image"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2vw;
  height: 100%;
`

const Intro = () => {
  return (
    <StyledContainer>
      <SEO title="Aquib Vadsaria Intro" description="Main Portfolio index" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
        }}
      >
        <IntroImage />
      </div>
    </StyledContainer>
  )
}

export default Intro
