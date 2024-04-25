import React from "react";
import image from '../assets/images.jpeg'
import { SidebarContainer, Sidebarimage } from "./styles/MainContainer.style";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Sidebarimage src={image}  alt="profile" />
    </SidebarContainer>
  );
}
