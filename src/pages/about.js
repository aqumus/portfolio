import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

const smallScreenStyle = css`
  font-size: 13px;
`

const nameStyle = css`
  display: inline-block;
  margin: 0;
  font-size: 15px;
`

const About = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <Layout page="About">
      <SEO title="About Aquib Vadsaria" />
      <article css={isSmallScreen && smallScreenStyle}>
        <h4>Hey there,</h4>
        <p>
          I am <h6 css={nameStyle}>Aquib Vadsaria</h6> born, brought up and
          based in <i>Mumbai</i>, professional web developer by choice where my
          core expertise is around front end technologies like HTLML5, CSS3, JS,
          React.js, Angular. My current role involves developing web application
          based on the UX design.
        </p>
        <p>
          I have started my career as a "System Engineer" where I was
          configuring Mainframe Server, network switches and storages for Data
          Center primarily used as high availability nodes but then soon
          realised my passion for coding and development which got me turned
          into a Web Developer.
        </p>

        <p>
          Highly productive, thorougly follow coding standards, clean code and
          have also deliver technical sessions. Self-learned Javascript and
          Python programming language, Node.js, React.js and Angular framework
          alongwith common utility libraries like highcharts, Rx.js, webpack
          (more could be browsed under Skills section).
        </p>

        <p>
          Beside learning about new technolgies like machine learning and
          blockchain, my area of interest includes to be more well versed about
          backend technologies i.e creating web servers and system design, which
          could allow me to reach my goal of becoming{" "}
          <em>Technical Architect</em>
        </p>

        <p>
          While I am not learning or coding, I like to listen music, watch
          movies and TV shows, play and watch gameplays, explore new places and
          sleep.
        </p>
      </article>

      <Link to="/">Back to Main</Link>
    </Layout>
  )
}

export default About
