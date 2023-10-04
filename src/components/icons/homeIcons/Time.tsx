import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={218}
      height={212}
      viewBox="0 0 218 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={111.931} cy={106.108} r={82.6588} fill="#B4AAF2" />
      <Circle cx={209.207} cy={32.2427} r={8.79348} fill="#B4AAF2" />
      <Circle cx={23.4493} cy={11.7246} r={11.7246} fill="#B4AAF2" />
      <Circle cx={11.7246} cy={155.938} r={5.86232} fill="#B4AAF2" />
      <Circle cx={194.042} cy={188.181} r={2.93116} fill="#B4AAF2" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.451 77.284h24.99c9.771 0 16.314 6.86 16.314 17.064v23.551c0 10.172-6.543 17.032-16.314 17.032h-24.99c-9.77 0-16.343-6.86-16.343-17.032V94.348c0-10.204 6.572-17.064 16.343-17.064zm10.837 37.442l13.691-13.691c.98-.98.98-2.566 0-3.574a2.54 2.54 0 00-3.574 0l-11.904 11.904-5.044-5.045a2.541 2.541 0 00-3.574 0c-.98.98-.98 2.566 0 3.575l6.86 6.831c.49.49 1.124.72 1.758.72.663 0 1.297-.23 1.787-.72z"
        fill="#fff"
      />
      <Circle cx={124.867} cy={5.27613} r={2.93116} fill="#B4AAF2" />
      <Circle cx={73.2789} cy={206.94} r={4.10363} fill="#B4AAF2" />
      <Circle cx={143.041} cy={200.491} r={1.17246} fill="#B4AAF2" />
      <Circle cx={199.905} cy={129.557} r={2.93116} fill="#B4AAF2" />
      <Circle cx={1.17246} cy={87.9348} r={1.17246} fill="#B4AAF2" />
    </Svg>
  )
}

export default SvgComponent
