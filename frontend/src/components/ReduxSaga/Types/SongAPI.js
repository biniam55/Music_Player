import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("https://music-player-final.onrender.com/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "https://music-player-final.onrender.com/addSongs",
    sendFile
  );
  // console.log(data)
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "https://music-player-final.onrender.com/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data = axios.patch(
    "https://music-player-final.onrender.com/updateSongs/" + id,
    artist
  );
  return data;
};