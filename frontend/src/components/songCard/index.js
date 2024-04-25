import React from "react";
import AlbumInfo from "./albumInfo";
import { SongCardBody } from "../styles/Playing.style";


export default function SongCard({ album }) {
  return (
    <SongCardBody>
      <AlbumInfo  />
    </SongCardBody>
  );
}
