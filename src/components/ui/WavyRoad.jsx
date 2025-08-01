import { MdLocalShipping } from "react-icons/md";

const WavyRoad = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-full max-md:h-235 max-md:w-300"
      >
        {/* Transparent wavy road */}
        <path
          id="wavyPath"
          d="M -10 250 Q 150 100, 300 250 T 600 250 T 1020 250"
          fill="none"
          stroke="rgba(0,0,0,0.10)"
          strokeWidth="45"
          strokeLinecap="round"
        />

        {/* Dashed Line */}
        <path
          d="M -10 250 Q 150 100, 300 250 T 600 250 T 1020 250"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />

        {[...Array(3)].map((_, i) => (
          <g key={i} transform="translate(-30, -13)">
            <foreignObject width="40" height="40">
              {/* Use foreignObject to embed HTML inside SVG */}
              <div style={{ width: 40, height: 40 }}>
                <MdLocalShipping className="w-6 h-6 text-black" />
              </div>
            </foreignObject>

            {/* Animate motion along path */}
            <animateMotion
              dur="15s"
              repeatCount="indefinite"
              begin={`${i * 3}s`}
              rotate="auto"
            >
              <mpath href="#wavyPath" />
            </animateMotion>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default WavyRoad;
