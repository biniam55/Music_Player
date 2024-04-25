import styled from "@emotion/styled";
export const QueueContainer = styled.div`
  position: absolute;
  width: 40%;
  height: 50%;
  margin-top: -50px;
  margin-left: 863px;
  border-radius: 30px;
  border-top-right-radius: 0px;
  background-color: #3e61d2;
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #3e61d2 40px
    ),
    repeating-linear-gradient(#4767d055, #4767d0);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* @media (max-width: 786px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 250px;
   
  } */
  `;
  export const SongQuee = styled.h3`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;`;
export const UploadContainer = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  /* max-width: 20%; */
  /* background-color: #00ffff; */
  /* margin: auto; */
  /* height: 100vh; */
  text-align: center;
  font-family: arial;
  margin-top: -95px;
  width: 100%;
  @media (max-width:786px){
    width: 100%;
    height: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
`;
export const UploadView = styled.img`
  margin: 1em;
  width: 85%;
  border-radius: 50px;
  align-items: center;
`;
export const ErrorView = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: row;
 margin-left: 110px;
`;
export const UploadButton = styled.input`
  align-items: center;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 30px;
  margin-right: 10px;
  margin-bottom: 15px;
  color: white;
  background-color: #ff8769;
  @media (max-width:786px){
    margin-bottom: 10px;
  }
`;
export const FileInput = styled.input`
  /* width: 100%; */
  align-items: center;
  border-radius: 10px;
  border: none;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 5px;
  margin-left: 70px;
  /* margin-top: -70px; */
  /* color: white; */
  /* background-color: #8aaae5; */
`;
export const ArtistInput = styled(FileInput)`
  background-color: black;
  color: white;
  cursor: text;
`
export const ArtistEditInput = styled(ArtistInput)`
background-color: #2BAE66;
  color: white;
`
