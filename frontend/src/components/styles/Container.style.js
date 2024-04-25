import styled from "@emotion/styled";

export const MainContainer = styled.div`
position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
 
  
  /* @media (max-width:786px) {
        overflow-y: scroll;
    }  */
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100vw;
  background-color: #3e61d2;

  /* display: flex;
    flex-direction: row;
    */
  /* height:100vh; */
  /* @media (max-width: 786px) {
    flex-direction: column;
  } */
`;
export const SidebarContainer = styled.div`
  width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 786px) {
      width: 0px;
    }
`;
export const Sidebarimage = styled.img`
 width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-top: 20px;
`;