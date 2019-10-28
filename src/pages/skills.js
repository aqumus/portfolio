import React from "react"

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
  <Layout page="Skills">
    <SEO title="Aquib Vadsaria skills" />
    <SkillContainer>
      <SkillCircle />
    </SkillContainer>
  </Layout>
)

export default Skills
