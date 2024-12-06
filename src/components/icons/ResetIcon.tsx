import * as React from "react";
import { IconProps } from "../../types/IconTypes";

export function ResetIcon({ color = "#000", ...props }: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M16.887 5c-4.383 0-8.251 2.503-10.053 6.299L5.581 8.723 4 9.477l2.602 5.347 5.402-2.576-.762-1.565-2.814 1.341c1.52-3.186 4.773-5.287 8.46-5.287 5.16 0 9.357 4.155 9.357 9.263s-4.198 9.263-9.358 9.263c-3.038 0-5.9-1.47-7.653-3.93L7.8 22.334A11.172 11.172 0 0016.887 27C23.015 27 28 22.065 28 16S23.015 5 16.887 5z"
        fill={color}
      />
    </svg>
  );
}
