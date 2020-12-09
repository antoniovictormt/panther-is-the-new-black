import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'rgb(90,17,90)' : 'rgb(90,17,90)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
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
  background: ${({ primary }) => (primary ? 'rgb(90,17,90)' : 'rgb(255, 255, 255)')};  
  color: ${({ dark }) => (dark ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 0, 0.4)')};
  };
`;

export const ButtonBuy = styled.div`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'rgb(90,17,90)' : 'rgb(90,17,90)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-bottom: 15px;

  &:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? 'rgb(90,17,90)' : 'rgb(255, 255, 255)')};  
  color: ${({ dark }) => (dark ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 0, 0.4)')};
  };
`;