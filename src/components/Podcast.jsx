import { useState, useEffect } from "react";
import usePodcast from "../context/usePodcast";
import useEpisode from "../context/useEpisode";
import { getEpisodes } from "../services/podcastService";
import styles from "../styles/Podcast.module.css";
import parse from "html-react-parser";
import useFavorites from "../context/useFavorites";
import { Star, X } from "lucide-react";

const Podcast = () => {
  const { podcast, setPodcast } = usePodcast();
  const { episode, setEpisode } = useEpisode();
  const { favorites, setFavorites } = useFavorites();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!podcast) return;
    const fetchEpisodes = async () => {
      const data = await getEpisodes(podcast.id);
      setEpisodes(data.sort((a, b) => a.episode - b.episode));
    };
    fetchEpisodes();
  }, [podcast]);

  const handleEpisodeClick = (current) => {
    if (episode && episode.id === current.id) {
      setEpisode(null);
    } else {
      setEpisode(current);
    }
  };

  const minutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!podcast) return null;

  const isFavorite = favorites.some((current) => current.id === podcast.id);

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (favorites.some((current) => current.id === podcast.id)) {
      setFavorites(favorites.filter((current) => current.id !== podcast.id));
    } else {
      setFavorites([...favorites, podcast]);
    }
  };

  const handleClosePodcast = () => {
    setPodcast(null);
    setEpisode(null);
  };

  return (
    <section className={styles.podcast}>
      <picture className={styles.cover}>
        <img src={podcast.image} alt={podcast.title} />
      </picture>
      <h1>{podcast.title}</h1>
      <article className={styles.content}>
        {parse(
          podcast.description.slice(
            0,
            podcast.description.indexOf("<br /><br />")
          ) + "..."
        )}
      </article>
      {episodes?.length > 0 && (
        <ul className={styles.episodes}>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className={styles.episode}
              onClick={() => handleEpisodeClick(episode)}
            >
              <picture>
                <img src={episode.feedImage} alt={episode.title} />
              </picture>
              <dl>
                <dt>{episode.title}</dt>
                <dd>{minutes(episode.duration)}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className={styles.close}
        onClick={handleClosePodcast}
      >
        <X />
      </button>
      <button
        type="button"
        onClick={handleFavorite}
        className={styles.favorite}
      >
        {isFavorite ? <Star fill="var(--light)" /> : <Star />}
      </button>
    </section>
  );
};

export default Podcast;
