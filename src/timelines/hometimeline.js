import { gsap, Power2 } from "gsap"

// export const homeTimeLine = gsap
//   .timeline({ paused: true, defaults: { duration: 0.5 } })
//   .addLabel("index-elements")

export const createHomeTimeLine = label =>
  gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: Power2.easeInOut } }).addLabel(label)

export const homeMobileTimeline = gsap
  .timeline({ paused: true })
  .addLabel("index-mobile-elements")
