import { useState, useEffect } from "react"

// Code courtesy https://www.hooks.guide/community/useMedia
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(undefined)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export const smallScreenQuery = "(max-width: 768px)"

export const extraSmallScreenQuery = `(max-width: 576px)`

export const useSmallScreenMediaQuery = () => {
  return useMediaQuery(smallScreenQuery)
}
