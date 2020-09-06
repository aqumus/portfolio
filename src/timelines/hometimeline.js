import { gsap } from "gsap"

// export const homeTimeLine = gsap
//   .timeline({ paused: true, defaults: { duration: 0.5 } })
//   .addLabel("index-elements")

export const createHomeTimeLine = label =>
  gsap.timeline({ paused: true, defaults: { duration: 0.5 } }).addLabel(label)

export const homeMobileTimeline = gsap
  .timeline({ paused: true })
  .addLabel("index-mobile-elements")
