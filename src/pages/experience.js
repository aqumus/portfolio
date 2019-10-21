import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import jpmorgan from "../images/jpmorgan.png"
import builtIo from "../images/builtIo.png"
import ibm from "../images/ibm.jpg"

import styled from "@emotion/styled"

const BrandIcon = styled.img`
  border-radius: 30px;
`

const ExperienceContainer = styled.div`
  color: black;
  .vertical-timeline-element-date {
    @media (min-width: 1170px) {
      color: white;
    }
  }
`

const Experience = () => (
  <Layout page="Experience">
    <SEO title="Aquib Vadsaria experience" />
    <ExperienceContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov, 2016 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<BrandIcon src={jpmorgan} alt={"JP Morgan icon"} />}
        >
          <h3 className="vertical-timeline-element-title">
            Application Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          <p>
            Working on a trading platform, rebuilding current Flex application
            to HTML/JS based application
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug, 2015 - Oct, 2016"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<BrandIcon src={builtIo} alt={"Built.io icon"} />}
        >
          <h3 className="vertical-timeline-element-title">Web Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          <p>
            Worked as a full stack developer for{" "}
            <a href="https://www.built.io/products/flow/features">
              Built.io Flow application
            </a>
            .
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July, 2012 - Aug, 2015"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<BrandIcon src={ibm} alt={"IBM icon"} />}
        >
          <h3 className="vertical-timeline-element-title">System Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          <p>
            Worked as System engineer where I used to setup, configure mainframe
            servers, swicthes and storages mainly used for high computing nodes
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ExperienceContainer>
    <Link to="/">Back to Main</Link>
  </Layout>
)

export default Experience
