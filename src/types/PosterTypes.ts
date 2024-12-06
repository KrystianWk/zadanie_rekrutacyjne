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
export interface ImageSectionProps {
  id: string;
  src: string;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export type PosterProps = {
  posterRef: React.RefObject<HTMLDivElement>;
};

export interface TextAreaSectionProps {
  id: string;

  text: string;

  color: string;

  wrapperRef: React.RefObject<HTMLDivElement>;

  setShowText: (show: boolean) => void;
  initialContent?: string;

  initialColor?: string;
}

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

export type Image = {
  id: string;
  src: string;
};

export type Text = {
  id: string;
  content: string;
  color: string;
};
