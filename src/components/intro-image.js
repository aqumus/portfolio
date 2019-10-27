import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const IntroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      high: file(relativePath: { eq: "intro-face_high.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medium: file(relativePath: { eq: "intro-face_medium.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      small: file(relativePath: { eq: "intro-face_small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fluid = [
    {
      ...data.high.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
    {
      ...data.medium.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.small.childImageSharp.fluid,
      media: `(max-width: 768px)`,
    },
  ]
  const isSmallScreen = useSmallScreenMediaQuery()
  return (
    <Img
      fluid={fluid}
      style={{
        borderRadius: "150px",
        width: isSmallScreen ? "150px" : "300px",
      }}
    />
  )
}

export default IntroImage