import React, { useState } from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Loader from "../components/loader"
import Intro from "../components/intro"
import About from "../components/about"

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Layout page="Skills">
          <Intro />
          <About />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
