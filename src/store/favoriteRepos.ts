import create from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposIds = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(persist<favoriteReposIds>(
    (set) => ({
        favoriteReposIds: [],
        addFavoriteRepo: (id: number) =>
          set((state) => ({ favoriteReposIds: [...state.favoriteReposIds, id] })), // remplazo el estado anterior por el nuevo, tomando el objeto anterior y agregando el nuevo id
        
        removeFavoriteRepo: (id: number) =>
          set((state) => ({
            favoriteReposIds: state.favoriteReposIds.filter( // filtro el array de ids, y devuelvo todos los ids que sean distintos al id que quiero remover
              (repoId) => repoId !== id
            ),
          })),
      }), {
        name: "favorite-repos-storage", // nombre de la key en el localStorage
      }
));
