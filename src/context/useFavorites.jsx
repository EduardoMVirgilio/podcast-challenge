import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],
      setFavorites: (favorites) => set({ favorites }),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorites;
