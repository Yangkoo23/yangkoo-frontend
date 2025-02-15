import { File } from "../types/types";
import { create } from "zustand";

interface HotelImagesState {
  hotelImages: string[];
  setHotelImages: (hotelImages: string[]) => void;
  addHotelImage: (image: string) => void;
}

export const useHotelImagesStore = create<HotelImagesState>()((set) => ({
  hotelImages: [],
  setHotelImages: (hotelImages) => set({ hotelImages }),
  addHotelImage: (image: string) =>
    set((state) => ({ hotelImages: [...state.hotelImages, image] })),
}));
