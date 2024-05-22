type VinylProps = {
  backgroundColor: string;
  innerRingColor: string;
  ringOffset?: string;
  outerRingColor?: string;
  bgImage?: string;
  innerBgImage?: string;
};

const Vinyl = (props: VinylProps) => {
  const { 
    backgroundColor, 
    innerRingColor, 
    outerRingColor,
    ringOffset,
    bgImage,
    innerBgImage
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700" fill="none">
      <rect 
        x="1" 
        y="1" 
        width="698" 
        height="698" 
        rx="349" 
        fill={bgImage ? "url(#bgPattern)" : backgroundColor}
        stroke={outerRingColor ? outerRingColor : "#F9FE00"}
        stroke-width="2"
      />
      <rect x="50" y="50" width="600" height="600" rx="300" stroke={ringOffset ?? "white"} stroke-opacity="0.2" stroke-width="2"/>
      <rect x="80.625" y="80.625" width="538.75" height="538.75" rx="269.375" stroke={ringOffset ?? "white"} stroke-opacity="0.2" stroke-width="2"/>
      <rect x="141" y="140.125" width="417.125" height="417.125" rx="208.562" stroke={ringOffset ?? "white"} stroke-opacity="0.2" stroke-width="2"/>
      <rect x="172.539" y="172.539" width="354.046" height="354.046" rx="177.023" stroke={ringOffset ?? "white"} stroke-opacity="0.2" stroke-width="2"/>
      <rect 
        x="226" 
        y="225"
        width="250" 
        height="250" 
        rx="125" 
        fill={innerBgImage ? "url(#innerPattern)" : innerRingColor}
      />
      <rect x="329.471" y="329.471" width="42.0601" height="42.0601" rx="21.03" fill="black"/>
      <defs>
        {/* bgImage */}
        {bgImage && (
          <pattern id="bgPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#bgImage" transform="scale(0.00390625)"/>
          </pattern>
        )}
        {bgImage && (
          <image id="bgImage" width="700" height="700" xlinkHref={bgImage} />
        )}
        {/* innerBgImage */}
        {innerBgImage && (
          <pattern id="innerPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#innerImage" transform="scale(0.00390625)"/>
          </pattern>
        )}
        {innerBgImage && (
          <image id="innerImage" width="250" height="250" xlinkHref={innerBgImage} />
        )}
      </defs>
    </svg>
  )
};

export default Vinyl;