import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usePodcast = create(
  persist(
    (set) => ({
      podcast: null,
      setPodcast: (podcast) => set({ podcast }),
    }),
    {
      name: "podast",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePodcast;
