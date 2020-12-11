import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--color-secundary)' : 'var(--color-secundary)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'var(--color-dark)' : 'var(--color-primary)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? 'var(--color-secundary)' : 'var(--color-primary)')};  
  color: ${({ dark }) => (dark ? 'var(--color-dark)' : 'rgb(0, 0, 0, 0.4)')};
  };
`;

export const ButtonBuy = styled.div`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--color-secundary)' : 'var(--color-secundary)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'var(--color-dark)' : 'var(--color-primary)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? 'var(--color-secundary)' : 'var(--color-primary)')};  
  color: ${({ dark }) => (dark ? 'var(--color-dark)' : 'rgb(0, 0, 0, 0.4)')};
  };
`;