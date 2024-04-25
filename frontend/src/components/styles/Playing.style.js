import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define the keyframes for the marquee animation
const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for the album info card
export const AlbumInfoCard = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const SongCardBody = styled.div`
   position: absolute;
  width: 42%;
  height: 35%;
  background-color: #27354d;
  border-radius: 30px;
  border-bottom-right-radius: 0px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin-left: 270px;
  margin-top: -70px;
  @media (max-width: 786px) {
    width: 80%;
    margin-left: 3px;
    margin-bottom: 5px;
    background-color: transparent;
  }
`;

// Styled component for paragraphs inside the album info card
export const AlbumInfoCardParagraph = styled.p`
  margin: 5px auto !important;
`;

// Styled component for the album name container
export const AlbumNameContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  color: #c3d0e3;
`;

// Styled component for the marquee effect
export const Marquee = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${marqueeAnimation} 12s linear infinite;
  padding-left: 100%;
`;

// Styled component for additional album information

