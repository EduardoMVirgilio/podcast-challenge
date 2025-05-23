import CryptoJS from "crypto-js";
export const getAllPodcasts = async () => {
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const data4Hash =
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_SECRET +
    apiHeaderTime;
  const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Date": ` ${apiHeaderTime}`,
      "X-Auth-Key": import.meta.env.VITE_API_KEY,
      Authorization: hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8 (ReactClient)",
    },
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/podcasts/trending?pretty=true`,
    options
  );
  const data = await response.json();
  return data.feeds;
};

export const getPodcastsByTitle = async (title) => {
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const data4Hash =
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_SECRET +
    apiHeaderTime;
  const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Date": ` ${apiHeaderTime}`,
      "X-Auth-Key": import.meta.env.VITE_API_KEY,
      Authorization: hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8 (ReactClient)",
    },
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/search/bytitle?q=${title}&pretty=true`,
    options
  );
  const data = await response.json();
  return data.feeds;
};

export const getPodcastById = async (id) => {
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const data4Hash =
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_SECRET +
    apiHeaderTime;
  const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Date": ` ${apiHeaderTime}`,
      "X-Auth-Key": import.meta.env.VITE_API_KEY,
      Authorization: hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8 (ReactClient)",
    },
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/podcasts/byfeedid?id=${id}&pretty=true`,
    options
  );
  const data = await response.json();
  return data.feed;
};

export const getEpisodes = async (id) => {
  const apiHeaderTime = Math.floor(Date.now() / 1000);
  const data4Hash =
    import.meta.env.VITE_API_KEY +
    import.meta.env.VITE_API_SECRET +
    apiHeaderTime;
  const hash4Header = CryptoJS.SHA1(data4Hash).toString(CryptoJS.enc.Hex);
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Date": ` ${apiHeaderTime}`,
      "X-Auth-Key": import.meta.env.VITE_API_KEY,
      Authorization: hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8 (ReactClient)",
    },
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/episodes/byfeedid?id=${id}&pretty=true`,
    options
  );
  const data = await response.json();
  return data.items;
};
