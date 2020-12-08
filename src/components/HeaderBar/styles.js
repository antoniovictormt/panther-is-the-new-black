import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScrool } from 'react-scroll';

export const Nav = styled.nav`
  height: 90px;
  margin-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  };
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  z-index: 1;
  height: 85px;
  width: 100%;
  max-width: 1180px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkRouter)`  
  display: flex;
  justify-self: flex-start;
  align-items: center;  

  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;

  background: rgb(255, 255, 255);

  &:hover{
    background: rgb(151, 133, 215);
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 0;
    right: 0;

    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;

    &:hover{
      color: rgb(151, 133, 215);
    }
  };
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  };
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScrool)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: 1.5rem;

  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid rgb(151, 133, 215);
  };

  &:hover{
    color: rgb(151, 133, 215);
  };
`;

export const HeaderButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: rgb(151, 133, 215);
  color: rgb(255, 255, 255);
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: rgb(255, 255, 255);
    color: rgb(151, 133, 215);
  }
`;