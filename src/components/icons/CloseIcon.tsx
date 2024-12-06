import * as React from "react";
import { IconProps } from "../../types/IconTypes";

export function CloseIcon(props: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M5.172 28a1.171 1.171 0 01-.829-2L26 4.343a1.172 1.172 0 111.657 1.658L6 27.657a1.166 1.166 0 01-.829.343z"
        fill="#000"
      />
      <path
        d="M26.828 28a1.168 1.168 0 01-.828-.343L4.343 6.001a1.172 1.172 0 011.658-1.658L27.657 26a1.172 1.172 0 01-.829 2z"
        fill="#000"
      />
    </svg>
  );
}
