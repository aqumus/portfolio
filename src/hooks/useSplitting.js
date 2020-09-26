import React, { useContext } from "react"

export const SplittingContext = React.createContext(null)

export const useSplittingLoaded = () => {
  const isSplittingLoaded = useContext(SplittingContext)
  return isSplittingLoaded
}
