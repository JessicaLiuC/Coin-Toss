import * as React from "react";
const SvgNotepad = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M168 128a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-112v160a32 32 0 0 1-32 32H72a32 32 0 0 1-32-32V40a8 8 0 0 1 8-8h24v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8m-16 8h-16v8a8 8 0 0 1-16 0v-8h-32v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 0 1-16 0v-8H56v152a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z" />
  </svg>
);
export default SvgNotepad;
