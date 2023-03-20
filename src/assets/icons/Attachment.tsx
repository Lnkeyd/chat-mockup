import React, { ReactElement } from "react";

function Icon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      fill="none"
      viewBox="0 0 14 16"
    >
      <path
        fill="#605E5C"
        d="M1.828 8.485l5.657-5.657a3 3 0 014.243 4.243L5.01 13.79a1.5 1.5 0 11-2.12-2.122l6.01-6.01a.5.5 0 10-.708-.707l-6.01 6.01a2.5 2.5 0 103.535 3.536l6.718-6.718a4 4 0 10-5.657-5.657L1.121 7.778a.5.5 0 00.707.707z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);