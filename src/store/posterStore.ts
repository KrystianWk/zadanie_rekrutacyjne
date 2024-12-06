import { create } from "zustand";

type State = {
  file: string | null;
  image: string | null;
  showText: boolean;
  posterReady: boolean;
  isBackgroundGray: boolean;

  reset: () => void;
  setFile: (file: string | null) => void;
  setImage: (image: string | null) => void;
  setShowText: (show: boolean) => void;
};

export const usePosterStore = create<State>((set) => ({
  file: null,
  image: null,
  showText: false,
  isBackgroundGray: false,
  posterReady: true,

  reset: () =>
    set({
      file: null,
      image: null,
      showText: false,
      isBackgroundGray: false,
      posterReady: true,
    }),

  setFile: (file) =>
    set((state) => ({
      file,
      isBackgroundGray: !file && state.showText,
      posterReady: !(file || state.image || state.showText),
    })),

  setImage: (image) =>
    set((state) => ({
      image,
      posterReady: !(state.file || image || state.showText),
    })),

  setShowText: (show) =>
    set((state) => ({
      showText: show,
      isBackgroundGray: show && !state.file,
      posterReady: !(state.file || state.image || show),
    })),
}));
