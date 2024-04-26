import axios from "axios";

export const getSongAPI = async () =>
  await axios.get("http://localhost:5500/getSongs");
export const postSongAPI = async (sendFile) => {
  const data = await axios.post(
    "http://localhost:5500/addSongs",
    sendFile
  );
  // console.log(data)
  return data;
};
export const deleteSongAPI = async (id) => {
  const data = await axios.delete(
    "http://localhost:5500/deleteSong/" + id
  );
  return data;
};
export const updateSongAPI = async (id, artist) => {
  const data = axios.patch(
    "http://localhost:5500/updateSongs/" + id,
    artist
  );
  return data;
};