import { useState } from "react";
import styles from "../styles/Search.module.css";
import useSearch from "../context/useSearch";
import { Search, X } from "lucide-react";
const SearchForm = () => {
  const { setSearch } = useSearch();
  const [keyword, setKeyword] = useState("");
  const [expanded, setExpanded] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(keyword);
  };
  const handleInput = (e) => {
    if (e.target.value.length < 3) {
      setKeyword("");
    }
    setKeyword(e.target.value);
  };

  return (
    <form
      className={`${styles.search} ${expanded ? styles.expanded : ""}`}
      onSubmit={handleSubmit}
    >
      <input type="text" placeholder="Search" onInput={handleInput} />
      <button type="button" onClick={() => setExpanded(!expanded)}>
        {expanded ? <X /> : <Search />}
      </button>
    </form>
  );
};

export default SearchForm;
