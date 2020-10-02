import * as React from "react"

export function Bullet(props) {
  return (
    <svg width={15} height={14} viewBox="0 0 15 14" fill="none" {...props}>
      <circle cx={7.936} cy={7} r={7} data-selected={props.selected} />
    </svg>
  )
}
