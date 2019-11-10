import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import IntroImage from "../components/intro-image"
import SEO from "../components/seo"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import Loader from "../components/loader"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2vw;
  height: 100%;
`

const IndexPage = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const isLoading = false
  if (isLoading) {
    return <Loader />
  }
  return (
    <Layout>
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
          <h1
            style={{
              fontSize: isSmallScreen ? "4vw" : "2.5vw",
              marginTop: "5vh",
              marginBottom: isSmallScreen ? "2.5vh" : "3.5vh",
            }}
          >
            Aquib Vadsaria
          </h1>
          <h3
            style={{
              fontSize: isSmallScreen ? "2.7vw" : "1.5vw",
            }}
          >
            Web Developer
          </h3>
        </div>
      </StyledContainer>
    </Layout>
  )
}

export default IndexPage
