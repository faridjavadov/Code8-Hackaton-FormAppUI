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
      <G clipPath="url(#clip0_21_119)">
        <Path
          d="M35.618 18.405c0-1.185-.105-2.31-.285-3.405h-16.95v6.765h9.705c-.435 2.22-1.71 4.095-3.6 5.37v4.5h5.79c3.39-3.135 5.34-7.755 5.34-13.23z"
          fill="#4285F4"
        />
        <Path
          d="M18.383 36c4.86 0 8.925-1.62 11.895-4.365l-5.79-4.5c-1.62 1.08-3.675 1.74-6.105 1.74-4.695 0-8.67-3.165-10.095-7.44h-5.97v4.635C5.273 31.95 11.348 36 18.383 36z"
          fill="#34A853"
        />
        <Path
          d="M8.288 21.435A10.446 10.446 0 017.718 18c0-1.2.21-2.355.57-3.435V9.93h-5.97a17.791 17.791 0 000 16.14l5.97-4.635z"
          fill="#FBBC05"
        />
        <Path
          d="M18.383 7.125c2.655 0 5.025.915 6.9 2.7l5.13-5.13C27.308 1.785 23.243 0 18.383 0 11.348 0 5.273 4.05 2.318 9.93l5.97 4.635c1.425-4.275 5.4-7.44 10.095-7.44z"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_21_119">
          <Path fill="#fff" d="M0 0H36V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
