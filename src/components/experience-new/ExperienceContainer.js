import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useSmallScreenMediaQuery } from "../../hooks/useMediaQuery"
import { Description } from "./Description"
import { Company } from "./Company"
import { Designation } from "./Designation"
import { Duration } from "./Duration"
import { TechnologyUsed } from "./TechnologyUsed"
import { ExperienceContext } from "./ExperienceContext"

const experienceContainerStyle = ({ background, color }) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${background};
  color: ${color};
`

const sectionStyle = ({ background, color }) => css`
  width: 70%;
  height: 60%;
  margin-right: 5%;
  position: relative;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh 0;
  background: ${background};
  color: ${color};
`

const experienceTitleStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const experienceHeaderStyle = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const ExperienceContainer = ({
  background,
  color,
  duration,
  company,
  companyFirstHalf,
  designation,
  designationFirstHalf,
  renderDescription,
  technologyUsed,
}) => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <ExperienceContext.Provider
      value={{
        background,
        color,
      }}
    >
      <div css={experienceContainerStyle({ background, color })}>
        <section css={sectionStyle({ color: background, background: color })}>
          <div css={experienceTitleStyle}>
            <div css={experienceHeaderStyle}>
              <Company firstHalf={companyFirstHalf}>{company}</Company>
              <Designation firstHalf={designationFirstHalf}>
                {designation}
              </Designation>
            </div>
            <Duration>{duration}</Duration>
          </div>
          <Description renderDescription={renderDescription} />
        </section>
        <TechnologyUsed>{technologyUsed}</TechnologyUsed>
      </div>
    </ExperienceContext.Provider>
  )
}
