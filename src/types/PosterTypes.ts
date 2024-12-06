import { MouseEventHandler } from "react";

export type PosterElement = {
  id: string;
  type: "text" | "image";
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text?: string;
  src?: string;
  color: string;
};
export type ImageProps = {
  image: string;
  setImage: (value: string | null) => void;
  containerRef: React.RefObject<HTMLDivElement>;
};
export type PosterProps = {
  posterRef: React.RefObject<HTMLDivElement>;
};

export type TextAreaSectionProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  setShowText: (value: boolean) => void;
};

export type ButtonProps = {
  value: string;
  whenDisabled: boolean;
  functionOnClick: () => void;
};

export type EditorProps = {
  posterRef: React.RefObject<HTMLDivElement>;
  openPopup: MouseEventHandler<HTMLButtonElement>;
};

export type OptionButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

export type ResetModalProps = {
  closePopup: () => void;
};

export type RestartBoxProps = {
  closePopup: () => void;
  reset: () => void;
};
