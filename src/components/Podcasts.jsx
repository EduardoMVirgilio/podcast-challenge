import { useEffect } from "react";
import usePodcasts from "../context/usePodcasts";
import { getAllPodcasts, getPodcastsByTitle } from "../services/podcastService";
import styles from "../styles/Podcasts.module.css";
import Card from "./Card";
import useSearch from "../context/useSearch";

const Podcasts = () => {
  const { podcasts, setPodcasts } = usePodcasts();
  const { search } = useSearch();
  useEffect(() => {
    const fetchPodcasts = async () => {
      let data = [];
      if (search && search.trim().length > 2) {
        data = await getPodcastsByTitle(search);
      } else {
        data = await getAllPodcasts();
      }
      setPodcasts(data);
    };
    fetchPodcasts();
  }, [search]);

  return (
    <ul className={styles.list}>
      {podcasts.map((podcast) => (
        <Card key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};

export default Podcasts;
