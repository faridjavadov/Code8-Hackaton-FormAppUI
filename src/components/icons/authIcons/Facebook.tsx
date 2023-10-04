import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_21_28)">
        <Path
          d="M36 18.11c0-9.941-8.06-18-18-18s-18 8.059-18 18c0 8.985 6.582 16.43 15.188 17.78V23.314h-4.571v-5.205h4.57v-3.963c0-4.51 2.688-7.003 6.8-7.003 1.968 0 4.029.352 4.029.352v4.43h-2.271c-2.236 0-2.934 1.387-2.934 2.81v3.376h4.992l-.798 5.204h-4.194v12.578C29.418 34.54 36 27.093 36 18.109z"
          fill="#1877F2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_21_28">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
