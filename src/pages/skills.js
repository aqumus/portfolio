import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCircle from "../components/skillCircle"
import styled from "@emotion/styled"
import SkillLevelLegend from "../components/skillLevelLegend"

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const Skills = () => (
  <Layout page="Skills">
    <SEO
      title="Aquib Vadsaria skills"
      description="Skills about Front End Technologies, Cloud, Backend technologies"
    />
    <SkillContainer>
      <SkillLevelLegend />
      <SkillCircle />
    </SkillContainer>
  </Layout>
)

export default Skills
