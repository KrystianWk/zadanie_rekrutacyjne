import * as React from "react";
import { IconProps } from "../../types/IconTypes";

export function AlertIcon({ color = "#CB0000", ...props }: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M27.617 22.675L18.444 6.442A2.783 2.783 0 0016 5c-1.02 0-1.934.539-2.444 1.442L4.383 22.675c-.51.903-.51 1.98 0 2.883A2.783 2.783 0 006.827 27h18.346c1.02 0 1.934-.539 2.444-1.442.51-.902.51-1.98 0-2.883zM26.4 24.84a1.397 1.397 0 01-1.227.724H6.827c-.512 0-.97-.27-1.227-.724a1.459 1.459 0 010-1.447L14.774 7.16A1.396 1.396 0 0116 6.437c.512 0 .97.27 1.226.723L26.4 23.393a1.46 1.46 0 010 1.447z"
        fill={color}
      />
      <path
        d="M16.703 12.17h-1.406v7.182h1.406v-7.183zM16 20.789a.949.949 0 00-.937.957c0 .529.42.958.937.958.517 0 .937-.43.937-.958A.949.949 0 0016 20.79z"
        fill={color}
      />
    </svg>
  );
}
