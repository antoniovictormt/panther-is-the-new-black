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
            <img src={Logo} alt="" />
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
          </NavMenu>

          <HeaderButton>
            <HeaderButtonLink to="https://www.amazon.com.br/Panther-New-Black-Representa%C3%A7%C3%A3o-Comunica%C3%A7%C3%A3o-ebook/dp/B07QZX6Q3V">
              Comprar
            </HeaderButtonLink>
          </HeaderButton>
        </NavContainer>
      </Nav>
    </>
  )
};