import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlbumInfoo, ArtistHolder, EditSong, Ptag } from "../styles/DisplaySong.style";
import { ArtistEditInput } from "../styles/FileUpload.style";
import { FaRegEdit } from "react-icons/fa";
import { UPDATE_SONG } from "../ReduxSaga/Types/Constants";
import { AlbumInfoCard, AlbumNameContainer, Marquee } from "../styles/PlayingNow.style";

export default function AlbumInfo({ album }) {
  const currentMusic = useSelector((state) => state.Songs.currentSong);
  const [clickedUpdate, setClickedUpdate] = useState(false);
  const [changedValue, setChangedValue] = useState(currentMusic.artist);
  const dispatch = useDispatch();
  const handleSubmit = async (song, e) => {
    const id = song._id;
    const artist = { changedValue };
    dispatch({ type: UPDATE_SONG, id, artist });
    setClickedUpdate(false);
    setChangedValue("");
  };
  const handleChange = (e) => {
    setChangedValue(e.target.value);
  };
  return (
    <AlbumInfoCard>
      <AlbumNameContainer>
        <Marquee>
          <h3>{currentMusic.song?.split(".")[0] ?? "No song playing"}</h3>
        </Marquee>
      </AlbumNameContainer>
      <AlbumInfoo>
        <ArtistHolder>
          {clickedUpdate === false ? (
            <>
              {Object.keys(currentMusic).length !== 0 ? (
                <Ptag>{currentMusic.artist}</Ptag>
              ) : (
                <Ptag>Music Player</Ptag>
              )}
            </>
          ) : (
            <ArtistEditInput
              type="text"
              value={changedValue}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          )}
          {Object.keys(currentMusic).length !== 0 ? (
            clickedUpdate === false ? (
              <EditSong
                onClick={() => {
                  setClickedUpdate(true);
                }}
              >
                <FaRegEdit />
              </EditSong>
            ) : (
              <EditSong
                onClick={() => {
                  setClickedUpdate(true);
                  handleSubmit(currentMusic);
                }}
              >
                Submit
              </EditSong>
            )
          ) : null}
        </ArtistHolder>
      </AlbumInfoo>
    </AlbumInfoCard>
  );
}
