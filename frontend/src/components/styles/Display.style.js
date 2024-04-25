import styled from "@emotion/styled";

export const DisplayScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e2a3e;
  background-image: repeating-radial-gradient(
      circle at center left,
      transparent 0,
      #233656 100px
    ),
    repeating-linear-gradient(#1e2a3e55, #1e2a3e);
border-radius: 70px;
border-top-right-radius: 0px;
@media (max-width: 786px) {
  border-radius: 0%;
}
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  align-items: center;
  justify-content: center;
  color: #27ae60;
  font-size: 3em;
`;

export const NextButton = styled(PlayButton)`
  color: #27ae60;
  font-size: 3em;
`;

export const PrevButton = styled(PlayButton)`
  /* size: "3em";
  color: "#27AE60" 
  color */
  color: #27ae60;
  font-size: 3em;
`;
export const Image = styled.img`
  width: 30%;
  border-radius: 10%;
`;
export const DispContainer = styled.div`
  /* background-color: white; */
  /* margin-top: 100px; */
  width: 100%;
  max-width: 100vw;
  /* margin:  auto; */
  padding-bottom: 2em;
  border-radius: 10px;
  h2{
    color: white;
    margin-right: 650px;
    
  }
  h3 {
    margin-top: 3em;
  }
  p {
    /* margin-top: -1em; */
    color: #4f4f4f;
  }
  @media (max-width: 786px) {
    /* width: 100%;
    margin: 5px; */
    h2{
      display: none;
    }
  }
  overflow-y: hidden;
`;
export const TimeDisplay = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: #828282;
  font-size: smaller;
`;
export const Progress = styled.div`
  display: flex;
 flex-direction: row;
 margin-left: 260px;
 margin-bottom: 60px;
 /* justify-content: space-between; */
  @media (max-width: 786px) {
   display: flex;
 flex-direction: column;
 margin-left: 20px;
 margin-bottom: 60px;
 /* margin-top: -60px; */
  }
`;
export const RangeInput = styled.input`
  width: 80%;
`;

export const AudioPlayer = styled.audio`
  width: 100%;
  background-color: gold;
`;
export const Next = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wave = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 500px;
  margin-bottom: 200px;
`;

export const AlbumInfoo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #9aa9c2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const EditSong = styled.button`
position: relative;
  align-items: center;
  border-radius: 10px;
  border: none;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  /* padding: 0px 0px; */
  /* margin: 20px; */
  /* margin-top: 30px; */
  margin-left: 50px;
  
  color: white;
  background-color: palevioletred;
`;
export const Ptag = styled.span`
color:white;
`;
export const ArtistHolder = styled.section`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  /* &:hover {
    background-color: #ddd;
    color: black;
  } */
  /* background-color: white; */
  justify-content: center;
  margin: 20px;
  /* p {
    margin-top: 25px;
  } */
`;