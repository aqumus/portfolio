import React from "react"
import Palette from "../../palette"

export const ExperienceContext = React.createContext({
  background: Palette.LIGHT_DARK,
  secondBackground: Palette.DARK,
  color: Palette.LIGHT,
})
