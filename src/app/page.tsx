'use client'
import Link from "next/link"
import { useFetchRepositories } from "@/hooks/useRepos"
import { useFavoriteReposStore } from "../store/favoriteRepos";
import { CardRepository } from "./components/CardRepository";
import {Button} from '@nextui-org/button'; 

export default function Home() {

  const { data, isLoading } = useFetchRepositories(); // useFetchRepositories es un hook personalizado que devuelve un objeto con data e isLoading
  const { favoriteReposIds } = useFavoriteReposStore(); // useFavoriteReposStore es seteado en store y devuelve un objeto con favoriteReposIds

  if (isLoading) return <div>Loading...</div>;
  
  return (
        <main className="py-12">
          <h1>Welcome to SCAFFOLD Next + TypeScript + React Query + Zustand by FML</h1>
          <Link href='/dashboard'>Navigate Dashboard</Link>
          {
            data?.map((repo) => (
              <CardRepository key={ repo.id } 
              repo={repo} // repo es un objeto que contiene los datos del repositorio
              isFavorite={favoriteReposIds.includes(repo.id)} // isFavorite es un booleano que devuelve true si el id del repo está en el array de favoritos
              />
            ))
          }
        </main>
  )
}
