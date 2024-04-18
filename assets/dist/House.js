import React from 'react';
import { Svg, Path } from 'react-native-svg';

const HouseSvg = () => {
  const pathData =
    'm219.31 108.68-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80 80 80Z';

  return (
    <Svg width={32} height={32} viewBox="0 0 256 256">
      <Path d={pathData} fill="grey" />
    </Svg>
  );
};

export default HouseSvg;
