import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScrool } from 'react-scroll';

export const Nav = styled.nav`
  background: var(--color-dark);
  height: 100px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

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
  text-decoration: none;

  cursor: pointer;

  background: var(--color-primary);

  &:hover{
    background: var(--color-secundary);
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;

    top: 0;
    right: 0;
    
    color: var(--color-primary);
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;

    &:hover{
      color: var(--color-secundary);
    }
  };
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;


  @media screen and (max-width: 820px) {
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

  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.2rem;

  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--color-secundary);
  };

  &:hover{
    color: var(--color-secundary);
  };
`;

export const HeaderButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const HeaderButtonLink = styled(LinkScrool)`
  border-radius: 50px;
  background: var(--color-secundary);
  color: var(--color-primary);
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 1.2rem;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: var(--color-primary);
    color: var(--color-secundary);
  }
`;