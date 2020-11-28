import { gsap } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import SEO from "./seo"
import { Experience } from "./experience-new"
import { SkillsNew } from "./skills-new"
import { AboutNew } from "./about-new"
import { useSmallScreenMediaQuery } from "../hooks/useMediaQuery"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
// import Splitting from "splitting"
import { Home } from "./home"
import { createHomeTimeLine } from "../timelines"
import { SplittingContext } from "../hooks/useSplitting"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

const landingnContainerStyle = css`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
`

const articleStyle = css`
  display: flex;
  flex-direction: column;
`

async function importSplittingModule(cb) {
  const { default: Splitting } = await import("splitting")
  Splitting()
  cb()
}

const LandingPage = () => {
  const isSmallScreen = useSmallScreenMediaQuery()
  const homeTimeLine = useRef(createHomeTimeLine("landing"))

  // dynamically load splitting.js module
  const [isSplittingLoaded, setSplittingLoaded] = useState(false)
  const importSplittingModuleCb = useCallback(importSplittingModule, [])
  useEffect(() => {
    importSplittingModuleCb(() => setSplittingLoaded(true))
  }, [importSplittingModuleCb, setSplittingLoaded])

  useLayoutEffect(() => {
    if (isSmallScreen === undefined) {
      return
    }
  }, [isSmallScreen])

  return (
    <SplittingContext.Provider value={isSplittingLoaded}>
      <SEO
        title="Aquib Vadsaria Portfolio"
        description="Know about Aquib Vadsaria, his front end/backend skills and his corporate experiences"
      />
      <div css={landingnContainerStyle} id="landing">
        <Home
          overlay={false}
          homeTimeLine={homeTimeLine.current}
          parentId={"landing"}
        />
        <article id="content-container" css={articleStyle}>
          <AboutNew />
          <SkillsNew />
          <Experience />
        </article>
      </div>
    </SplittingContext.Provider>
  )
}

export default LandingPage
