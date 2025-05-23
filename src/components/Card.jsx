import React from "react";
import usePodcast from "../context/usePodcast";
import useFavorites from "../context/useFavorites";
import styles from "../styles/Card.module.css";
import { Star } from "lucide-react";

const Card = ({ podcast }) => {
  const { setPodcast } = usePodcast();
  const { favorites, setFavorites } = useFavorites();
  const isFavorite = favorites.some((current) => current.id === podcast.id);

  const handleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (favorites.some((current) => current.id === podcast.id)) {
      setFavorites(favorites.filter((current) => current.id !== podcast.id));
    } else {
      setFavorites([...favorites, podcast]);
    }
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setPodcast(podcast);
  };

  return (
    <li key={podcast.id} className={styles.card} onClick={handleCardClick}>
      <picture className={styles.cover}>
        <img src={podcast.image} alt={podcast.title} />
      </picture>
      <dl className={styles.info}>
        <dt>{podcast.title}</dt>
        <dd>{podcast.description.slice(0, 100) + "..."}</dd>
      </dl>
      <button className={styles.favorite} onClick={handleFavorite}>
        {isFavorite ? <Star fill="var(--light)" /> : <Star />}
      </button>
    </li>
  );
};

export default Card;
