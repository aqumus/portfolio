import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
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
  margin: ${isSmallScreen ? "3vh 5vw 3vh 2vw" : "0 2vw 7vh 2vw"};
  transform: translateX(-120%);
`

const IntroImage = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const introContainerCss = introContainerStyle(isSmallScreen)
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
          fluid(maxWidth: 110) {
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
    <div css={introContainerCss} id="intro-image">
      <Img
        fluid={fluid}
        style={{
          clipPath: "ellipse(50% 50% at 50% 50%)",
          width: isSmallScreen ? "110px" : "300px",
        }}
      />
    </div>
  )
}

export default IntroImage
