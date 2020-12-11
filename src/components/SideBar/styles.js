import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScrool } from 'react-scroll';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--color-dark);
  
  display: grid;
  align-items: center;
  top: 0;
  left: 0;

  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--color-primary);  
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    color: var(--color-secundary);
  }
`;

export const SideBarWrapper = styled.div`
  color: var(--color-primary);
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLinks = styled(LinkScrool)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;

  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: var(--color-secundary);
  };
`;

export const SideBarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBarButtonLink = styled(LinkScrool)`
  border-radius: 50px;
  background: var(--color-secundary);
  color: var(--color-primary);

  white-space: nowrap;
  padding: 16px 64px;
  font-size: 1.5rem;
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
