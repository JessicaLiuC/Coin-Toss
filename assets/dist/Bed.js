import * as React from "react";
const SvgBed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M216 72H32V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0v-32h208v32a8 8 0 0 0 16 0v-96a40 40 0 0 0-40-40M32 88h72v72H32Zm88 72V88h96a24 24 0 0 1 24 24v48Z" />
  </svg>
);
export default SvgBed;
