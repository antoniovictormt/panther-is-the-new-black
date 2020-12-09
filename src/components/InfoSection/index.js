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
  Column2,
  ImgWrap,
  Img
} from './styles';

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <SubTitle darkText={darkText}>
                  {description}
                </SubTitle>
                <BtnWrap >
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
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
