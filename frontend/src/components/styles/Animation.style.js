import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define the keyframes for different animation styles
const quietAnimation = keyframes`
  25% {
    transform: scale(0.6);
  }
  50% {
    transform: scale(0.4);
  }
  75% {
    transform: scale(0.8);
  }
`;

const normalAnimation = keyframes`
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.4);
  }
  75% {
    transform: scale(0.6);
  }
`;

const loudAnimation = keyframes`
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.4);
  }
  75% {
    transform: scale(1.2);
  }
`;

// Styled components for Box and BoxContainer
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 54px;
  --boxSize: 4px;
  --gutter: 8px;
  width: calc((var(--boxSize) + var(--gutter)) * 13);
`;

export const Box = styled.div`
  height: 100%;
  width: var(--boxSize);
  background: linear-gradient(40deg, #364562 20%, #C96850 100%);
  border-radius: 18px;
  transform: scale(0.4);
  &.active {
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  &.box1 {
    animation-name: ${quietAnimation};
  }

  &.box2 {
    animation-name: ${normalAnimation};
  }

  &.box3 {
    animation-name: ${quietAnimation};
  }

  &.box4 {
    animation-name: ${loudAnimation};
  }

  &.box5 {
    animation-name: ${quietAnimation};
  }

  &.box6 {
    animation-name: ${normalAnimation};
  }

  &.box7 {
    animation-name: ${quietAnimation};
  }
`;

export const SongDuration = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 200px;
    align-items: center;
     @media (max-width: 786px) {
    width: 100%;
    margin-left: 45px;
    margin-top: 95px;
  }
`;
export const Duration = styled.span`
   font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #c4d0e3;
`;


// Styled component for the controls wrapper
export const ControlsWrapper = styled.div`
  width: 100%;
  margin-left: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 786px) {
    /* width: 100%; */
    margin-left: 45px;
  }
`;

// Styled component for the action button
export const ActionButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Styled component for the play/pause button
export const PlayPauseButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  background-color: #c96850;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: inset -4px -4px 10px #55291e, inset 4px 4px 10px 1px #ffae9a;

  // Apply active style when a certain condition is met
  &.active {
    box-shadow: inset -4px -4px 10px #ff8769, inset 4px 4px 10px 1px #753d30;
  }

  &:hover {
    transform: scale(1.1);
  }
`;


