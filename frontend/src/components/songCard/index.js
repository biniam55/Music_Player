import React from "react";
import AlbumInfo from "./albumInfo";
import { SongCardBody } from "../styles/PlayingNow.style";


export default function SongCard({ album }) {
  return (
    <SongCardBody>
      <AlbumInfo  />
    </SongCardBody>
  );
}
