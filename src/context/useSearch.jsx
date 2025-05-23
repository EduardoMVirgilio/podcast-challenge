import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSearch = create(
  persist(
    (set) => ({
      search: "",
      setSearch: (search) => set({ search }),
    }),
    {
      name: "search",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSearch;
