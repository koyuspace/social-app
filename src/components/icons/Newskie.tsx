export default function Newskie(props: {style?: React.CSSProperties, size?: number}) {
  return (
    <svg
      fill="none"
      viewBox="4 4 16 16"
      version="1.1"
      height={props.size || 24}
      width={props.size || 24}
      id="svg1"
    >
      <defs id="defs1" />
      <g
        style={{
          fill: 'none',
          stroke: '#31b61c',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: 1,
          ...props.style
        }}
        id="g1"
        transform="matrix(0.60214215,0,0,0.60214215,5.0753581,4.774293)"
      >
        <path
          d="M 7,20 H 17"
          id="path1-3"
          style={{ stroke: '#31b61c', strokeOpacity: 1 }} />
        <path
          d="m 10,20 c 5.5,-2.5 0.8,-6.4 3,-10"
          id="path2"
          style={{ stroke: '#31b61c', strokeOpacity: 1 }} />
        <path
          d="m 9.5,9.4 c 1.1,0.8 1.8,2.2 2.3,3.7 C 9.8,13.5 8.3,13.5 7,12.8 5.8,12.2 4.7,10.9 4,8.6 6.8,8.1 8.4,8.6 9.5,9.4 Z"
          id="path3"
          style={{ stroke: '#31b61c', strokeOpacity: 1 }} />
        <path
          d="M 14.1,6 A 7,7 0 0 0 13,10 c 1.9,-0.1 3.3,-0.6 4.3,-1.4 1,-1 1.6,-2.3 1.7,-4.6 -2.7,0.1 -4,1 -4.9,2 z"
          id="path4"
          style={{ stroke: '#31b61c', strokeOpacity: 1 }} />
      </g>
    </svg>
  )
}