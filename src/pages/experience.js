import React from "react"

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

  .vertical-timeline-element-content,
  .vertical-timeline::before {
    background: #cfd8dc;
  }
  .vertical-timeline-element-content-arrow {
    border-right-color: #cfd8dc;
  }
  .vertical-timeline-element-title {
    padding-bottom: 5px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  .vertical-timeline-element-subtitle {
    @media (max-width: 768px) {
      font-size: 13px;
    }

    .vertical-timeline-element-description {
      font-size: 15px;
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
`

const Experience = () => (
  <Layout page="Experience">
    <SEO
      title="Aquib Vadsaria experience"
      description="JP Morgan, Built.io, IBM"
    />
    <ExperienceContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov, 2016 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<BrandIcon src={jpmorgan} alt={"JP Morgan icon"} />}
        >
          <h3 className="vertical-timeline-element-title">J.P Morgan Chase</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Application Developer
          </h5>
          <p className="vertical-timeline-element-description">
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
          <h3 className="vertical-timeline-element-title">Built.io</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Engineer</h4>
          <p className="vertical-timeline-element-description">
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
          <h3 className="vertical-timeline-element-title">IBM</h3>
          <h4 className="vertical-timeline-element-subtitle">
            System Engineer
          </h4>
          <p className="vertical-timeline-element-description">
            Worked as System engineer where I used to setup, configure mainframe
            servers, swicthes and storages mainly used for high computing nodes
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ExperienceContainer>
  </Layout>
)

export default Experience
