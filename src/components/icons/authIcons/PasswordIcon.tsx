import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_21_19)"
        stroke="#667085"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12.667 7.833H3.333C2.597 7.833 2 8.43 2 9.167v4.666c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V9.167c0-.737-.597-1.334-1.333-1.334zM4.667 7.833V5.167a3.333 3.333 0 016.666 0v2.666" />
      </G>
      <Defs>
        <ClipPath id="clip0_21_19">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
