import { gsap } from "gsap"
import Palette from "../palette"

export class LinkHover {
  constructor(el) {
    this.el = el
    this.initEvents()
    this.filterId = "#filter-6"
    this.el.feDisplacementMap = document.querySelector(
      `${this.filterId} > feDisplacementMap`
    )
    this.primitiveValues = { scale: 0 }
    this.createTimeline()
    this.tl.eventCallback(
      "onUpdate",
      () =>
        (this.el.feDisplacementMap.scale.baseVal = this.primitiveValues.scale)
    )
    this.tl.to(this.primitiveValues, {
      duration: 1,
      ease: "Expo.easeOut",
      startAt: { scale: 80 },
      scale: 0,
    })
  }
  initEvents() {
    this.onMouseEnterFn = () => this.tl.restart()
    this.onMouseLeaveFn = () => this.tl.progress(1).kill()
    console.log("el", this.el)
    this.el.parentElement.addEventListener("mouseenter", this.onMouseEnterFn)
    this.el.parentElement.addEventListener("mouseleave", this.onMouseLeaveFn)
  }
  createTimeline() {
    // init timeline
    this.tl = gsap.timeline({
      paused: true,
      onStart: () => {
        this.el.style.filter = `url(${this.filterId}`
      },
      onComplete: () => {
        this.el.style.filter = "none"
      },
    })
  }
}
