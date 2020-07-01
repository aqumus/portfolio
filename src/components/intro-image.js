import React from "react"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
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

const introContainerStyle = isSmallScreen => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2vw;
`

const introNameStyle = isSmallScreen => css`
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: 24px;
  ${isSmallScreen &&
    `
    font-size: 15px;
  `}
`

const introDesignationStyle = isSmallScreen => css`
  font-size: 16px;
  ${isSmallScreen &&
    `
  font-size: 12px;
`}
`

const IntroImage = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const introContainerCss = introContainerStyle(isSmallScreen)
  const data = useStaticQuery(graphql`
    query {
      high: file(relativePath: { eq: "intro-face_high.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
          fluid(maxWidth: 150) {
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
  return (
    <div css={introContainerCss}>
      <Img
        fluid={fluid}
        style={{
          clipPath: "ellipse(50% 50% at 50% 50%)",
          width: isSmallScreen ? "150px" : "300px",
        }}
      />
    </div>
  )
}

export default IntroImage
