import { FaBars } from 'react-icons/fa'

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  HeaderButton,
  HeaderButtonLink
} from './styles';

import Logo from '../../assets/images/logo.svg';

export default function Header({ toggle }) {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img src={Logo} alt="Panther is the New Black" />
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about-author">
                Autor
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about-book">
                Sinopse
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discorver">
                Descubra
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="depoiments">
                Depoimentos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">
                Galeria
              </NavLinks>
            </NavItem>
          </NavMenu>

          <HeaderButton>
            <HeaderButtonLink to="buy">
              Comprar
            </HeaderButtonLink>
          </HeaderButton>
        </NavContainer>
      </Nav>
    </>
  )
};