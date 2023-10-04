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
      <G clipPath="url(#clip0_21_15)">
        <Path
          d="M30.67 30.678h-5.33v-8.354c0-1.992-.041-4.555-2.779-4.555-2.779 0-3.203 2.168-3.203 4.409v8.5h-5.332V13.5h5.122v2.341h.069c.715-1.35 2.455-2.774 5.055-2.774 5.401 0 6.4 3.555 6.4 8.182v9.429h-.002zM8.006 11.149a3.093 3.093 0 01-3.094-3.097 3.096 3.096 0 113.095 3.098zm2.673 19.529H5.332V13.5h5.346v17.178zM33.338 0H2.656C1.188 0 0 1.161 0 2.594v30.813C0 34.84 1.188 36 2.656 36h30.677C34.8 36 36 34.84 36 33.407V2.594C36 1.16 34.8 0 33.333 0h.005z"
          fill="#0A66C2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_21_15">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
