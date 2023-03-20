import React, { ReactElement } from "react";

function Icon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      fill="none"
      viewBox="0 0 16 10"
    >
      <path
        fill="#407EC9"
        fillRule="evenodd"
        d="M3.72 8.464L1.02 5.21a.557.557 0 00-.824-.052.657.657 0 00-.049.882l3.111 3.75c.223.269.612.281.849.027l1.445-1.548L6.814 9.79c.223.269.611.281.848.027l8.167-8.75a.657.657 0 000-.884.556.556 0 00-.825 0L7.275 8.464l-.897-1.08 5.896-6.317a.657.657 0 000-.884.556.556 0 00-.825 0L5.602 6.448l-.827.885L3.72 8.464z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);