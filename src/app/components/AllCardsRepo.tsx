'use client'
import { useFetchRepositories } from "@/hooks/useRepos";

export const AllCardsRepo = () => {

    const { data, isLoading } = useFetchRepositories();

  if (isLoading) return <div>Loading...</div>;
  console.log('Soy desde All cards Repo', data);

  return (
    <>
        <h2>All Repos</h2>
    </>
  )
}
