import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCircle from "../components/skillCircle"
import styled from "@emotion/styled"

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Skills = () => (
  <Layout>
    <SEO title="Aquib Vadsaria skills" />
    <SkillContainer>
      <SkillCircle />
      <Link to="/">Back to Main</Link>
    </SkillContainer>
  </Layout>
)

export default Skills
