import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={30}
      height={29}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_18_13476)">
        <Path
          d="M12.5 5.69l5 4.5V18h-2v-6h-6v6h-2v-7.81l5-4.5zm0-2.69l-10 9h3v8h6v-6h2v6h6v-8h3l-10-9z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_18_13476">
          <Path fill={props.color} transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
