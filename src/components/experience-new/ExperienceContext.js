import React from "react"
import Palette from "../../palette"

export const ExperienceContext = React.createContext({
  background: Palette.DARK,
  color: Palette.LIGHT,
})
