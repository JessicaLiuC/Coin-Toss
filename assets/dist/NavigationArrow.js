import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface NavigationArrowProps {
  fill?: string; // Optional fill color prop
}

const NavigationArrow = ({ fill = 'white' }: NavigationArrowProps) => {
  const pathData =
    'M237.33 106.21 61.41 41l-.16-.05a16 16 0 0 0-20.35 20.3 1 1 0 0 0 .05.16l65.26 175.92A15.77 15.77 0 0 0 121.28 248h.3a15.77 15.77 0 0 0 15-11.29l.06-.2 21.84-78 78-21.84.2-.06a16 16 0 0 0 .62-30.38Zm-87.49 38.09a8 8 0 0 0-5.54 5.54l-23 82.16-.06-.17L56 56l175.82 65.22.16.06Z';

  return (
    <Svg width={18} height={18} viewBox="0 0 256 256">
      <Path d={pathData} fill={fill} />
    </Svg>
  );
};

export default NavigationArrow;