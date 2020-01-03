import React, { useState, useCallback } from "react"
import { useTransition, animated } from "react-spring"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Layout from "../components/layout"
import Loader from "../components/loader"
import Intro from "../components/intro"
import Experience from "../components/experience"
import Skills from "../components/skills"

const pageStyle = css`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 15;
`

const pages = [
  ({ style, onCloseHandler }) => (
    <animated.div style={{ ...style, background: "lightpink" }} css={pageStyle}>
      <Skills onCloseHandler={onCloseHandler} />
    </animated.div>
  ),
  ({ style, onCloseHandler }) => (
    <animated.div
      style={{ ...style, background: "lightgreen" }}
      css={pageStyle}
    >
      <Experience onCloseHandler={onCloseHandler} />
    </animated.div>
  ),
]

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)

  const [index, set] = useState(3)
  const onClick = useCallback(cIndex => {
    console.log("c", cIndex)
    set(cIndex)
  }, [])

  const transitions = useTransition(index, p => p, {
    from: index => ({
      opacity: 0,
      transform: `translate3d(${index === 0 ? -1 : 1}50%,-20%,0) scale(0.2)`,
    }),
    enter: () => ({ opacity: 1, transform: `translate3d(0%,0,0) scale(1)` }),
    leave: index => ({
      opacity: 0,
      transform: `translate3d(${index === 0 ? -1 : 1}50%,-20%,0) scale(0.2)`,
    }),
  })
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Layout page="Skills">
          <Intro onClickHandler={onClick} />
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            if (!Page) return null
            return (
              <Page key={key} style={props} onCloseHandler={() => onClick(3)} />
            )
          })}
        </Layout>
      )}
    </>
  )
}

export default IndexPage
