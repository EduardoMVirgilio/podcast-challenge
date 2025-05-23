import { Outlet, NavLink } from "react-router";
import useEpisode from "./context/useEpisode";
import Episode from "./components/Episode";
import usePodcast from "./context/usePodcast";
import Podcast from "./components/Podcast";
import styles from "./styles/Layout.module.css";
import useFavorites from "./context/useFavorites";

const Layout = () => {
  const { episode } = useEpisode();
  const { podcast } = usePodcast();
  const { favorites } = useFavorites();
  return (
    <>
      {episode && <Episode />}
      {podcast && <Podcast />}
      <header id={styles.headerMain}>
        <h1>Podcasts</h1>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Trending
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/favorites"
          >
            Favoritos <span>{favorites.length}</span>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
