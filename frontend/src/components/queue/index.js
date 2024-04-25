import React, { useEffect, useState } from "react";
import {
  DeleteButton,
  Holder,
  List,
  ListButton,
  SongListStyle,
} from "../styles/SongList.style";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_SONG,
  DELETE_SONG,
  GET_SONG,
} from "../ReduxSaga/Types/Constants";
import { playCurrent } from "../ReduxToolkit/Features/SongSlice";
import {
  ErrorView,
  FileInput,
  QueueContainer,
  SongQuee,
  UploadButton,
  UploadContainer,
} from "../styles/Upload.style";

export default function Queue() {
  const [clicked, setClicked] = useState(false);
  const [fileValue, setFileValue] = useState("");
  const [artist, setArtist] = useState("");
  const handleSong = (song) => {
    dispatch(playCurrent(song));
  };

  const songList = useSelector((state) => state.Songs.songs);
  const error = useSelector((state) => state.Songs.error);
  console.log(songList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFunc = async () => {
      dispatch({ type: GET_SONG });
    };
    fetchFunc();
  }, []);

  const handleDelete = async (song) => {
    const id = song._id;
    dispatch({ type: DELETE_SONG, id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("artist", artist);
    dispatch({ type: ADD_SONG, formData });
    // console.log(error.response.data);
    // setError(error.response.data.error);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setFileValue(e.target.files[0]);
    // console.log(fileValue);
  };
 

  return (
    <QueueContainer>
      <SongQuee>Song List</SongQuee>
      <UploadContainer>
        <form>
          <FileInput
            type="file"
            accept="audio/*"
            required
            onChange={handleUpload}
          />
          <br />
          <ErrorView>
            <UploadButton
              type="submit"
              onClick={handleSubmit}
              value="Add Song"
            />
            <p style={{ color: "red" }}> {error} </p>
          </ErrorView>
        </form>
      </UploadContainer>

      <SongListStyle>
        {songList && (
          <Holder>
            {songList.map((items, index) => (
              <List key={index}>
                <ListButton
                  onClick={() => {
                    setClicked(true);
                    handleSong(items);
                  }}
                >
                  <span>{items.artist}</span>
                </ListButton>

                <DeleteButton
                  // deleteSong={items}
                  onClick={() => {
                    handleDelete(items);
                  }}
                  // primary
                >
                  <RiDeleteBin5Line />
                </DeleteButton>
              </List>
            ))}
          </Holder>
        )}
      </SongListStyle>
    </QueueContainer>
  );
}
