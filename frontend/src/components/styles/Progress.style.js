import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define keyframes for the rotation animation
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Create a styled component for the circle
export const Circlee = styled.circle`
  /* transition: all 1s ease-in-out; */
  transform: rotate(93deg);
  transform-origin: 50% 50%;
`;

// Create a styled component for the image in the active state
export const ActiveImage = styled.image`
  animation: ${rotation} 30s infinite linear;
  transform-origin: 50% 50%;
`;

// Optionally create a styled component for centering elements
export const ProgressCircle = styled.div`
  display: flex; /* Ensure children elements are flex items */
  justify-content: center; /* Aligns items horizontally to the center */
  align-items: center; /* Aligns items vertically to the center */
`;
