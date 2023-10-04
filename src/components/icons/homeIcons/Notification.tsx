import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 22.853a1.78 1.78 0 001.72-1.52h-3.507A1.78 1.78 0 0012 22.853z"
        fill="#BDBDBD"
      />
      <Path
        d="M21.4 20.133V18.98l-.057-.05-.002-.002a10.081 10.081 0 01-1.76-2.056l-.014-.02-.012-.023a8.922 8.922 0 01-.953-3.397l-.002-.019v-3.31a6.754 6.754 0 00-.051-.788l2.851 10.82zm0 0H2.533V18.98l.058-.05h0l.005-.005a10.101 10.101 0 001.733-2.055l.012-.02.011-.021a8.92 8.92 0 00.953-3.397l.002-.019v-3.313a6.707 6.707 0 015.77-6.657l.43-.06V2.072a.39.39 0 01.78 0v1.28l.436.056a6.547 6.547 0 011.777.49V4s0 0 0 0m6.9 16.134L14.5 4m0 0v0h.22-.22z"
        stroke="#828285"
      />
      <Path
        d="M20 7.333a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666z"
        fill="#4C6ED7"
      />
    </Svg>
  )
}

export default SvgComponent
