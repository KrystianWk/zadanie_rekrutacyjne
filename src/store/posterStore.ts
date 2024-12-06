import { create } from "zustand";
import { Image, Text } from "../types/PosterTypes";

type State = {
  file: string | null;
  images: Image[];
  texts: Text[];
  isBackgroundGray: boolean;
  posterReady: boolean;
  selectedTextId: string | null;
  selectedImageId: string | null;

  reset: () => void;
  setFile: (file: string | null) => void;
  addImage: (src: string) => void;
  removeImage: (id: string) => void;
  addText: (content: string, color: string) => void;
  removeText: (id: string) => void;
  setSelectedTextId: (id: string | null) => void;
  setSelectedImageId: (id: string | null) => void;
};

export const usePosterStore = create<State>((set) => ({
  file: null,
  images: [],
  texts: [],
  isBackgroundGray: false,
  posterReady: true,
  selectedTextId: null,
  selectedImageId: null,

  reset: () =>
    set({
      file: null,
      images: [],
      texts: [],
      isBackgroundGray: false,
      posterReady: true,
      selectedTextId: null,
      selectedImageId: null,
    }),

  setFile: (file) =>
    set((state) => ({
      file,
      isBackgroundGray:
        !file && (state.images.length > 0 || state.texts.length > 0),
      posterReady: !!file || state.images.length > 0 || state.texts.length > 0,
    })),

  addImage: (src) =>
    set((state) => {
      const updatedImages = [
        ...state.images,
        { id: Date.now().toString(), src },
      ];
      return {
        images: updatedImages,
        isBackgroundGray:
          !state.file && (updatedImages.length > 0 || state.texts.length > 0),
        posterReady:
          !!state.file || updatedImages.length > 0 || state.texts.length > 0,
      };
    }),

  removeImage: (id) =>
    set((state) => {
      const updatedImages = state.images.filter((image) => image.id !== id);
      return {
        images: updatedImages,
        isBackgroundGray:
          !state.file && (updatedImages.length > 0 || state.texts.length > 0),
        posterReady:
          !!state.file || updatedImages.length > 0 || state.texts.length > 0,
      };
    }),

  addText: (content, color) =>
    set((state) => {
      const updatedTexts = [
        ...state.texts,
        { id: Date.now().toString(), content, color },
      ];
      return {
        texts: updatedTexts,
        isBackgroundGray:
          !state.file && (state.images.length > 0 || updatedTexts.length > 0),
        posterReady:
          !!state.file || state.images.length > 0 || updatedTexts.length > 0,
      };
    }),

  removeText: (id) =>
    set((state) => {
      const updatedTexts = state.texts.filter((text) => text.id !== id);
      return {
        texts: updatedTexts,
        isBackgroundGray:
          !state.file && (state.images.length > 0 || updatedTexts.length > 0),
        posterReady:
          !!state.file || state.images.length > 0 || updatedTexts.length > 0,
      };
    }),
  setSelectedTextId: (id) => set({ selectedTextId: id }),
  setSelectedImageId: (id) => set({ selectedImageId: id }),
}));
