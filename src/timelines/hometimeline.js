import { gsap } from "gsap"

export const homeTimeLine = gsap
  .timeline({ paused: true })
  .addLabel("index-elements")

export const homeMobileTimeline = gsap
  .timeline({ paused: true })
  .addLabel("index-mobile-elements")
