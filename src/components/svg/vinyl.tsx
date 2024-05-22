type VinylProps = {
  backgroundColor?: string;
  ringColor?: string;
  ringOffset?: string;
};

const Vinyl = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="699" height="699" viewBox="0 0 699 699" fill="none">
      <rect x="1" y="1" width="697" height="697" rx="348.5" fill="black" stroke="#F9FE00" stroke-width="2"/>
      <rect x="49.93" y="49.93" width="599.14" height="599.14" rx="299.57" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
      <rect x="80.5112" y="80.5112" width="537.977" height="537.977" rx="268.989" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
      <rect x="140.8" y="139.926" width="416.526" height="416.526" rx="208.263" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
      <rect x="172.294" y="172.294" width="353.538" height="353.538" rx="176.769" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
      <rect x="224" y="223" width="250" height="250" rx="125" fill="white"/>
      <rect x="329" y="329" width="42" height="42" rx="21" fill="black"/>
    </svg>
  )
};

export default Vinyl;