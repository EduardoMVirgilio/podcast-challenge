import { useState, useRef } from "react";
import styles from "../styles/Episode.module.css";
import useEpisode from "../context/useEpisode";
import { X, Play, Pause } from "lucide-react";
const Episode = () => {
  const { episode, setEpisode } = useEpisode();
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <section className={styles.episode}>
      <picture className={styles.cover}>
        <img src={episode.image} alt={episode.title} />
      </picture>
      <h1>{episode.title}</h1>
      <audio className={styles.audio} controls ref={audioRef}>
        <source src={episode.enclosureUrl} type="audio/mpeg" />
      </audio>
      <button type="button" className={styles.action} onClick={handlePlayPause}>
        {playing ? <Pause /> : <Play />}
      </button>
      <button
        type="button"
        className={styles.close}
        onClick={() => setEpisode(null)}
      >
        <X />
      </button>
    </section>
  );
};

export default Episode;
