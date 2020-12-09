import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhone,
  FiMail
} from 'react-icons/fi';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  SocialWrap,
  Column2,
  ImgWrap,
  Img
} from './styles';

import { ButtonBuy } from '../Button/styles';

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  titleColor,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  btnWrap,
  socialWrap,
  borderRadius,
  img,
  size,
  alt
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine titleColor={titleColor}>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <SubTitle darkText={darkText}>
                  {description}
                </SubTitle>
                <BtnWrap btnWrap={btnWrap}>
                  <ButtonBuy>
                    <a href="http://www.kelpf.tk/TySjw" target="_blank" rel="noreferrer" title="Versão Física do Livro">
                      <p>
                        Compre aqui a versão física do livro
                      </p>
                    </a>
                  </ButtonBuy>

                  <ButtonBuy>
                    <a href="http://www.kelpf.tk/F3yM4" target="_blank" rel="noreferrer" title="Versão Digital do Livro">
                      <p>
                        Compre aqui a versão digital do livro
                      </p>
                    </a>
                  </ButtonBuy>
                </BtnWrap>
                <SocialWrap socialWrap={socialWrap}>
                  <a href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="Facebook de Rodrigo Sérgio" id="Facebook">
                    <FiFacebook />
                  </a>
                  <a href="http://www.kelpf.tk/8F8AH" target="_blank" rel="noreferrer" title="Instagram de Rodrigo Sérgio" id="Instagram">
                    <FiInstagram />
                  </a>
                  <a href="http://www.kelpf.tk/CHwie" target="_blank" rel="noreferrer" title="Linkedin de Rodrigo Sérgio" id="Linkedin">
                    <FiLinkedin />
                  </a>
                  <a href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="Whatsapp de Rodrigo Sérgio" id="Whatsapp">
                    <FiPhone />
                  </a>
                  <a href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="E-mail de Rodrigo Sérgio" id="E-mail">
                    <FiMail />
                  </a>
                </SocialWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img size={size} borderRadius={borderRadius} src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
