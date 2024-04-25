import React from "react";
// import "./Controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";
import { ActionButton, ControlsWrapper, PlayPauseButton } from "./styles/WaveAnimation.style";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <ControlsWrapper>
        <ActionButton onClick={handlePrev}>
          <IoPlaySkipBack />
        </ActionButton>
        <PlayPauseButton
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </PlayPauseButton>
        <ActionButton onClick={handleNext}>
          <IoPlaySkipForward />
        </ActionButton>
      </ControlsWrapper>
    </IconContext.Provider>
  );
}
