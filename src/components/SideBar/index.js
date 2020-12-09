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

          <SideBarLinks to="gallery" onClick={toggle}>
            Galeria
          </SideBarLinks>
        </SideBarMenu>

        <SideBarButton>
          <SideBarButtonLink to="buy" onClick={toggle}>
            Comprar
            </SideBarButtonLink>
        </SideBarButton>
      </SideBarWrapper>
    </SideBarContainer>
  )
};
