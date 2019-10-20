import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Aquib Vadsaria" />
    <article>
      <h4>Hey there,</h4>
      <p>
        I am <em>Aquib Vadsaria</em>, born, brought up and based in{" "}
        <i>Mumbai</i>, professional web developer by choice where my core
        expertise is around front end technologies mainly HTLML5, CSS3, JS,
        React.js, Angular. Usually my current role involves developing web
        application based on the UX design.
      </p>
      <p>
        I have started my career as a "System Engineer" where I was configuring
        Mainframe Server, network switches and storages for Data Center
        primarily used as high availability nodes but then soon realised my
        passion for coding and development which got me turned into a Web
        Developer.
      </p>

      <p>
        I also advocate enriching team work culture for high productivity,
        coding standards, clean code and deliver technical sessions. With my
        continious learning spirit, I have self-learned about Javascript and
        Python programming language, Node.js, React.js and Angular framework
        alongwith common utility libraries like d3.js, highcharts, Rx.js,
        webpack (more could be browsed under Skills section). Beside learning
        about new technolgies like machine learning and blockchain, my area of
        interest includes to be more adversed and well versed about backend
        technologies i.e creating web servers and system design, thereby to
        become a great
        <em>Technical Architect</em>
      </p>

      <p>
        While I am not learning or coding, I like to listen music, watch movies
        and TV shows, play and watch gameplays, explore new places and sleep.
      </p>
    </article>

    <Link to="/">Back to Main</Link>
  </Layout>
)

export default About
