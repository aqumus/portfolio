import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blogs = () => (
  <Layout page="Blogs">
    <SEO title="Aquib Vadsaria blogs" />
    <h1>Blogs</h1>
    <Link to="/">Back to Main</Link>
  </Layout>
)

export default Blogs
