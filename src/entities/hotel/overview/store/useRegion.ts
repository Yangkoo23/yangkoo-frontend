import { Region } from "../types/types";
import { create } from "zustand";

interface RegionsState {
  regions: Region[];
  setRegions: (regions: Region[]) => void;
}

export const useRegionsStore = create<RegionsState>()((set) => ({
  regions: [],
  setRegions: (regions) => set({ regions }),
}));
