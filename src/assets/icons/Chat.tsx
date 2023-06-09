import React, { ReactElement } from "react";

function Icon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#A19F9D"
        d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.587-1.112l-3.826 1.067a1.25 1.25 0 01-1.54-1.54l1.068-3.823A9.96 9.96 0 010 10C0 4.477 4.477 0 10 0zm0 1.5A8.5 8.5 0 001.5 10c0 1.47.373 2.883 1.073 4.137l.15.27-1.112 3.984 3.987-1.112.27.15A8.5 8.5 0 1010 1.5zM6.75 11h4.498a.75.75 0 01.102 1.493l-.102.007H6.75a.75.75 0 01-.102-1.493L6.75 11h4.498H6.75zm0-3.5h6.505a.75.75 0 01.101 1.493L13.255 9H6.75a.75.75 0 01-.102-1.493L6.75 7.5h6.505H6.75z"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);