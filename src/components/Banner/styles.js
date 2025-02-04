import styled from 'styled-components';
import {
  MdArrowForward,
  MdKeyboardArrowRight
} from 'react-icons/md';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15px;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :befor {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2)),
                linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    
    z-index: 2;
  }
`;

export const BannerSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BannerBg = styled.img`
  display: none;

  @media screen and (max-width: 800px) { 
    display: flex;       
    width: 100%;
    height: 100%;

    -o-object-fit: cover;
    object-fit: cover;
  };
`

export const BannerVd = styled.video`
  width: 100%;
  height: 100%;

  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 800px) {    
    display: none;
  };
`;

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerH1 = styled.h1`
  font-size: 48px;
  text-align: center;
  color: var(--color-primary);

  @media screen and (max-width: 800px) {
    font-size: 40px;
  };

  @media screen and (max-width: 480px) {
    font-size: 32px;
  };
`;

export const BannerP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  color: var(--color-primary);

  @media screen and (max-width: 800px) {
    display: none;
  };
`;

export const BannerButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;