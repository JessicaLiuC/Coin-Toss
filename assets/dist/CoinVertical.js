import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface SvgCoinVerticalProp {
  fill?: string; // Optional fill color prop
}

const SvgCoinVertical = ({ fill = 'white' }: SvgCoinVerticalProp) => {
  const pathData =
    'M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91m1.28 63.91h-32a152.8 152.8 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48m-20.6-64h-28.73a83 83 0 0 0-12-16H152c10 0 19.4 6 27.19 16M56 128c0-47.7 22-88 48-88s48 40.3 48 88-22 88-48 88-48-40.3-48-88m96 88h-13.51a83 83 0 0 0 12-16h28.73C171.4 210 162 216 152 216m36.7-32h-30.58a152.8 152.8 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48';

  return (
    <Svg width={18} height={18} viewBox="0 0 256 256">
      <Path d={pathData} fill={fill} />
    </Svg>
  );
};

export default SvgCoinVertical;
