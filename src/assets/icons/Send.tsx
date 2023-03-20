import React, { ReactElement } from "react";

function Icon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#407EC9"
        d="M10.816 10.197l-7.53 1.256a.5.5 0 00-.387.318L.3 18.728c-.249.64.42 1.25 1.034.943l18-9a.75.75 0 000-1.342l-18-9C.722.022.052.632.301 1.272l2.598 6.957a.5.5 0 00.386.318l7.531 1.256a.2.2 0 010 .394z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);