import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import SkillCircle from "./skillCircle"
import styled from "@emotion/styled"
import SkillLevelLegend from "./skillLevelLegend"

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  color: white;
  cursor: pointer;
`

const Skills = ({ onCloseHandler }) => (
  <Layout page="Skills">
    <SEO
      title="Aquib Vadsaria skills"
      description="Skills about Front End Technologies, Cloud, Backend technologies"
    />
    <CloseButton onClick={() => onCloseHandler()}>&#10005;</CloseButton>
    <SkillContainer>
      <SkillLevelLegend />
      <SkillCircle />
    </SkillContainer>
  </Layout>
)

export default Skills
