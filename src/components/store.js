import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
    persist((set) => ({
        query: "",
        setQuery: (newQuery) => set({ query: newQuery }),
        selectedMovie: null,
        setSelectedMovie: (newSelectedMovie) =>
            set({ selectedMovie: newSelectedMovie }),
    })),
    {
        name: "movie-database",
        getStorage: () => sessionStorage,
    }
);

export default useStore;
