import { create } from "zustand";

const useStore = create((set) => ({
    query: "",
    setQuery: (newQuery) => set({ query: newQuery }),
    selectedMovie: null,
    setSelectedMovie: (newSelectedMovie) => set({selectedMovie: newSelectedMovie})
}));

export default useStore;
