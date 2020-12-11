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
  PdfWrap,
  BtnWrap,
  SocialWrap,
  Column2,
  ImgWrap,
  Img
} from './styles';

import { ButtonBuy } from '../Button/styles';

import PDF from '../../assets/pdf/panther_is_the_new_black.pdf';

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  titleColor,
  topLine,
  lightText,
  headline,
  darkText,
  alignText,
  description,
  pdfWrap,
  btnWrap,
  imgWrap,
  socialWrap,
  borderRadius,
  img,
  size,
  alt
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="wrapper">
          <InfoRow id="start" imgStart={imgStart}>
            <Column1 id="column1">
              <TextWrapper>
                <TopLine id="topline" titleColor={titleColor}>
                  {topLine}
                </TopLine>
                <Heading id="title" lightText={lightText}>
                  {headline}
                </Heading>
                <SubTitle id="description" darkText={darkText} alignText={alignText}>
                  {description}
                </SubTitle>

                <SocialWrap socialWrap={socialWrap}>
                  <a id="Facebook" href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="Facebook de Rodrigo Sérgio" >
                    <FiFacebook />
                  </a>
                  <a id="Instagram" href="http://www.kelpf.tk/8F8AH" target="_blank" rel="noreferrer" title="Instagram de Rodrigo Sérgio" >
                    <FiInstagram />
                  </a>
                  <a id="Linkedin" href="http://www.kelpf.tk/CHwie" target="_blank" rel="noreferrer" title="Linkedin de Rodrigo Sérgio" >
                    <FiLinkedin />
                  </a>
                  <a id="Whatsapp" href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="Whatsapp de Rodrigo Sérgio" >
                    <FiPhone />
                  </a>
                  <a id="E-mail" href="http://www.kelpf.tk/6hpiy" target="_blank" rel="noreferrer" title="E-mail de Rodrigo Sérgio">
                    <FiMail />
                  </a>
                </SocialWrap>

                <BtnWrap btnWrap={btnWrap}>

                  <a id="midia" href="http://www.kelpf.tk/TySjw" target="_blank" rel="noreferrer" title="Versão Física do Livro">
                    <ButtonBuy>
                      Clique aqui e compre a versão física do livro
                      </ButtonBuy>
                  </a>

                  <a id="ebook" href="http://www.kelpf.tk/F3yM4" target="_blank" rel="noreferrer" title="Versão Digital do Livro">
                    <ButtonBuy>
                      Clique aqui e compre a versão digital do livro
                      </ButtonBuy>
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2 id="column2">
              <PdfWrap id="pdf" pdfWrap={pdfWrap}>
              <embed src={PDF} type="application/pdf" />
              </PdfWrap>

              <ImgWrap id="img" imgWrap={imgWrap}>
                <Img size={size} borderRadius={borderRadius} src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
