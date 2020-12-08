import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLinks,
  SideBarButton,
  SideBarButtonLink
} from './styles.js';

export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLinks to="about-author" onClick={toggle}>
            Autor
          </SideBarLinks>


          <SideBarLinks to="about-book" onClick={toggle}>
            Sinopse
          </SideBarLinks>


          <SideBarLinks to="discorver" onClick={toggle}>
            Descubra
          </SideBarLinks>


          <SideBarLinks to="depoiments" onClick={toggle}>
            Depoimentos
          </SideBarLinks>
        </SideBarMenu>

        <SideBarButton>
          <SideBarButtonLink to="https://www.amazon.com.br/Panther-New-Black-Representa%C3%A7%C3%A3o-Comunica%C3%A7%C3%A3o-ebook/dp/B07QZX6Q3V">
            Comprar
            </SideBarButtonLink>
        </SideBarButton>
      </SideBarWrapper>
    </SideBarContainer>
  )
};
