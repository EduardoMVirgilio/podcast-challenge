import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usePodcasts = create(
  persist(
    (set) => ({
      podcasts: [],
      setPodcasts: (podcasts) => set({ podcasts }),
    }),
    {
      name: "podcasts",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePodcasts;
