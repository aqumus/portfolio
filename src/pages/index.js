import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30vh;
`

const IndexPage = () => (
  <Layout>
    <StyledContainer>
      <SEO title="Aquib Vadsaria Intro" />
      <Image />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Aquib Vadsaria</h1>
        <h3>Web Developer</h3>
      </div>
    </StyledContainer>
  </Layout>
)

export default IndexPage
