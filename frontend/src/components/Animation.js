import React from "react";
import { Box, BoxContainer } from "./styles/Animation.style";

export default function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "box active" : "box";

  return (
    <BoxContainer>
      <Box className={`${waveClass} box1`}></Box>
      <Box className={`${waveClass} box2`}></Box>
      <Box className={`${waveClass} box3`}></Box>
      <Box className={`${waveClass} box4`}></Box>
      <Box className={`${waveClass} box5`}></Box>
      <Box className={`${waveClass} box6`}></Box>
      <Box className={`${waveClass} box7`}></Box>
      <Box className={`${waveClass} box2`}></Box>
      <Box className={`${waveClass} box3`}></Box>
      <Box className={`${waveClass} box4`}></Box>
      <Box className={`${waveClass} box5`}></Box>
      <Box className={`${waveClass} box6`}></Box>
      <Box className={`${waveClass} box7`}></Box>
    </BoxContainer>
  );
}
