import { Button } from "@/components/ui/button"
import { Repository } from "../../interfaces/reposType"
import { useFavoriteReposStore } from "../../store/favoriteRepos"

type RepoCardProps = {
    repo: Repository,
    isFavorite: boolean
}

export const CardRepository = ( { repo, isFavorite }: RepoCardProps ) => {

  const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo); // addFavoriteRepo es una función que se setea en store y agrega un id al array de favoritos
  const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo); // removeFavoriteRepo es una función que se setea en store y remueve un id al array de favoritos

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repo.id);
      return;
    }
    addFavoriteRepo(repo.id);
  };

  return (
    <>
        <h2>Repository { repo.name } </h2>
        <Button onClick={ handleFavorite } >{ isFavorite ? 'Dislike' : 'Like' }</Button>
    </>
  )
}
