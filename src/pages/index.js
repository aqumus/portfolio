import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 2vw;
  height: 100%;
`

const IndexPage = () => (
  <Layout>
    <StyledContainer>
      <SEO title="Aquib Vadsaria Intro" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image />
        <h1
          style={{
            fontSize: "2.5vw",
            marginTop: "5vh",
          }}
        >
          Aquib Vadsaria
        </h1>
        <h3
          style={{
            fontSize: "1.5vw",
          }}
        >
          Web Developer
        </h3>
      </div>
    </StyledContainer>
  </Layout>
)

export default IndexPage
