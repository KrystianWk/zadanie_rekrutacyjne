import * as React from "react";
import { IconProps } from "../../types/IconTypes";

export function SvgComponent({
  width = 32, // Domyślna szerokość
  height = 32, // Domyślna wysokość
  color = "#000", // Domyślny kolor
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Przekazywanie dodatkowych właściwości
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 6H6v20h20V6zM4 4v24h24V4H4z"
        fill={color} // Kolor dynamiczny
      />
      <path
        d="M10 17.42h.821v-3.354H10v3.354zM13.167 17.495c.469 0 .808-.131 1.063-.38.227-.22.375-.525.399-.858h-.822c-.037.323-.278.558-.644.558-.492 0-.798-.446-.798-1.06 0-.61.255-1.065.793-1.065.353 0 .585.23.626.53h.821c-.041-.376-.208-.704-.496-.924-.237-.183-.561-.296-.946-.296-.989 0-1.633.755-1.633 1.755 0 1.004.663 1.74 1.637 1.74zM16.816 16.824c-.534 0-.807-.464-.807-1.074 0-.61.273-1.08.807-1.08.538 0 .803.47.803 1.08 0 .61-.265 1.074-.803 1.074zm-.005.676c1.007 0 1.643-.746 1.643-1.75S17.818 14 16.81 14c-1.002 0-1.637.746-1.637 1.75s.635 1.75 1.637 1.75zM19.16 17.42h.803v-1.562c0-.117-.009-.549-.009-.549h.01s.18.361.236.45l.974 1.661H22v-3.354h-.803v1.59c0 .117.01.52.01.52h-.01l-.227-.426-.983-1.684h-.826v3.354z"
        fill={color} // Kolor dynamiczny
      />
    </svg>
  );
}
