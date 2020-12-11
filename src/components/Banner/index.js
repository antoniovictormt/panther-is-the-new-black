import { useState } from 'react';
import { Button } from '../Button/styles';

import Video from '../../assets/videos/black_panther.mp4';
import GIF from '../../assets/videos/black_panther.gif';

import {
  BannerContainer,
  BannerSection,
  BannerBg,
  BannerVd,
  BannerContent,
  BannerH1,
  BannerP,
  BannerButtonWrapper,
  ArrowForward,
  ArrowRight
} from './styles';

export default function Banner() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  };

  return (
    <BannerContainer id="home">
      <BannerSection>
        <BannerBg src={GIF} type=".gif" />
        <BannerVd autoPlay loop muted src={Video} type="video/mp4" />
      </BannerSection>

      <BannerContent>
        <BannerH1>
          Panther is the New Black: Representação e Cultura na Comunicação do Filme Pantera Negra
        </BannerH1>

        <BannerP>
          Uma análise crítica do longa-metragem de sucesso Pantera Negra (Black Panther, 2018), Panther is The
          new Black é uma obra acadêmica que busca responder à questão: como, de fato, explicar o impacto social
          e comercial da representatividade negra no seu contexto mercadológico?
        </BannerP>

        <BannerButtonWrapper>
          <Button to="buy"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='false'
          >
            Comprar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerButtonWrapper>
      </BannerContent>
    </BannerContainer>
  )
};
