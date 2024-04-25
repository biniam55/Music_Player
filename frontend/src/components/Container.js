import React from 'react'
import { ContentContainer, MainContainer } from './styles/Container.style'
import DisplaySong from './Display'
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