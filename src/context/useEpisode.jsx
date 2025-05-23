import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useEpisode = create(
  persist(
    (set) => ({
      episode: null,
      setEpisode: (episode) => set({ episode }),
    }),
    {
      name: "episode",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useEpisode;
