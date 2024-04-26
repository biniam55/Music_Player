import React, { useEffect, useRef, useState } from "react";
import {
  DisplayScreen,
  DispContainer,
  AudioPlayer,
  Progress,
  Next,
  Wave,
} from "./styles/Display.style";
import Controls from "./Controls";
import { useDispatch, useSelector } from "react-redux";
import WaveAnimation from "./Animation";
import ProgressCircle from "./Progress";
import image from "../assets/images.jpeg";
import Queue from "./queue";
import { Duration, SongDuration } from "./styles/Animation.style";
import AlbumInfo from "./songCard/albumInfo";
import { SongCardBody } from "./styles/Playing.style";
function DisplaySong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0); // Store the total duration
  const audioRef = useRef(null);

  const currentMusic = useSelector((state) => state.Songs.currentSong);
  // const dispatch = useDispatch();

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    // Update the `isPlaying` state based on `isPlaying`
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    const onTimeUpdate = () => {
      setTrackProgress(audioElement.currentTime); // Update current progress
    };

    const onLoadedMetadata = () => {
      setTrackDuration(audioElement.duration); // Get total duration
    };

    audioElement.addEventListener("timeupdate", onTimeUpdate);
    audioElement.addEventListener("loadedmetadata", onLoadedMetadata);

    // Cleanup listeners on component unmount
    return () => {
      audioElement.removeEventListener("timeupdate", onTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [isPlaying]);

  // Function to format time into minutes and seconds
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  const duration = audioRef.current ? audioRef.current.duration : 0;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // Handle submitting changes

  return (
    <DisplayScreen>
      <DispContainer>
        <h2>Playing Now</h2>
        {/* <Image src="https://picsum.photos/200/200" /> */}
        <Progress>
          <ProgressCircle
            percentage={currentPercentage}
            isPlaying={true}
            image={image}
            size={300}
            color="#C96850"
          />
          <div>
          <SongCardBody>
          {/* this is the component for the song card */}
            <AlbumInfo />
          </SongCardBody>
          </div>
        </Progress>
        
        <div>
          <AudioPlayer
            ref={audioRef}
            src={`http://localhost:5500/uploads/${currentMusic.song}`} // Source of audio
            autoPlay={isPlaying} // Control auto-play based on `isPlaying`
          ></AudioPlayer>

          <Next>
            <Wave>
              <SongDuration>
                <Duration>{formatTime(trackProgress)}</Duration>
                <WaveAnimation isPlaying={isPlaying} />
                <Duration className="duration">{formatTime(trackDuration)}</Duration>{" "}
                {/* Display total duration */}
              </SongDuration>

              <Controls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            </Wave>
            <Queue />
          </Next>
        </div>
      </DispContainer>
    </DisplayScreen>
  );
}

export default DisplaySong;
