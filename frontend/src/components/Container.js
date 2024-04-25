import React from 'react'
import { ContentContainer, MainContainer } from './styles/MainContainer.style'
import DisplaySong from './DisplaySong'
import Sidebar from './Sidebar'

function Container() {
  return (
    <MainContainer>
    <ContentContainer>
        <Sidebar/>
        <DisplaySong/>
    </ContentContainer>
    </MainContainer>
  )
}

export default Container