import useFavorites from "../context/useFavorites";
import Card from "../components/Card";
import styles from "../styles/Podcasts.module.css";
const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <>
      <ul className={styles.list}>
        {favorites.map((favorite) => (
          <Card key={favorite.id} podcast={favorite} />
        ))}
      </ul>
    </>
  );
};

export default Favorites;
