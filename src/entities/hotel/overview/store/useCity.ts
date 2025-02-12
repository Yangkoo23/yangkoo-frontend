import { City } from "../types/types";
import { create } from "zustand";

interface CitiesState {
  cities: City[];
  setCities: (cities: City[]) => void;
}

export const useCitiesStore = create<CitiesState>()((set) => ({
  cities: [],
  setCities: (cities) => set({ cities }),
}));
