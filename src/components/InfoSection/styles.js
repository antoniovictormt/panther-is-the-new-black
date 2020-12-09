import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? 'rgb(90,17,90)' : 'rgb(0, 0, 0)')};

  @media screen and (max-width: 800px) {
    padding: 100px 0;
  }; 
`;

export const InfoWrapper = styled.div`
  display: grid;

  z-index: 1;
  height: 960px;
  width: 100%;
  max-width: 1300px;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 800px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  };
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  margin: auto;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ titleColor }) => (titleColor ? 'rgb(90,17,90)' : 'rgb(0, 0, 0)')};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;  
  text-align: center;
  text-transform: uppercase;
  margin: 15px 0;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: ${({ lightText }) => (lightText ? 'rgb(255, 255, 255)' : 'rgb(90,17,90)')};

  @media screen and (max-width: 400px) {
    font-size: 32px;
  };
`;

export const SubTitle = styled.p`
  max-width: 640px;
  margin: 0 auto 35px auto;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? 'rgb(90,17,90)' : 'rgb(0, 0, 0)')};
`;

export const SocialWrap = styled.div`
  display: ${({ socialWrap }) => (socialWrap ? 'flex' : 'none')};
  justify-content: space-around; 
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px; 

    border-radius: 62px;
    border: 2px solid rgb(0, 0, 0) ;

    svg {
      width: 40px;
      height: 40px; 
    };       
  };

  #Facebook {
    color: rgb(255, 255, 255);
    background: rgb(0, 32, 255, 0.9);
    transition: 0.2s;

    &:hover{
      background: rgb(0, 32, 255, 0.7);
      transition: 0.2s;
    };
  };   

  #Instagram {
    color: rgb(0, 0, 0);
    background: linear-gradient(rgb(230, 100, 101), rgb(145, 152, 229));
    transition: 0.2s;

    &:hover{
      background: linear-gradient(rgb(145, 152, 229), rgb(230, 100, 101));
      transition: 0.2s;
    };
  };   

  #Linkedin {
    color: rgb(0, 32, 255, 0.6);
    background-color: rgb(255, 255, 248);
    transition: 0.2s;

    &:hover{
      background-color: rgb(255, 255, 240, 0.7);
      transition: 0.2s;
    };
  };   

  #Whatsapp {
    color: rgb(255, 255, 255);
    background-color: rgb(0,100,0);
    transition: 0.2s;

    &:hover{
      background-color: rgb(0,100,0, 0.8);
      transition: 0.2s;
    };
  };   

  #E-mail {
    color: rgb(255, 255, 255);
    background-color: rgb(255,0,0);
    transition: 0.2s;

    &:hover{
      background-color: rgb(255,0,0, 0.8);
      transition: 0.2s;
    };
  }; 
`;

export const BtnWrap = styled.div`
  display: ${({ btnWrap }) => (btnWrap ? 'flex' : 'none')};
  justify-content: space-around; 
  flex-wrap: wrap;

  a {    
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
`;

export const ImgWrap = styled.div`
  min-width: 555px;
  height: 100%;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  };  
`;

export const Img = styled.img`
  width: ${({ size }) => (size ? '80%' : '65%')};
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: ${({ borderRadius }) => (borderRadius ? '80%' : 'none')};

  @media screen and (max-width: 800px) {
    width: ${({ size }) => (size ? '50%' : '35%')};
  };
`;
