import React, { useState } from "react"

import Layout from "../components/layout"
import Loader from "../components/loader"
import Intro from "../components/intro"

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Layout page="Skills">
          <Intro />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
