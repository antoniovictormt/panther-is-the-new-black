import { useState } from 'react';
import { Button } from '../Button/styles';

import Video from '../../assets/videos/black_panther.mp4'

import {
  BannerContainer,
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
      <BannerBg>
        <BannerVd autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>

      <BannerContent>
        <BannerH1>
          Panther is the New Black: Representação e Cultura na Comunicação do Filme Pantera Negra
        </BannerH1>

        <BannerP>
          Uma análise crítica do longa-metragem de sucesso Pantera Negra (Black Panther, 2018), Panther is The
          new Black é uma obra acadêmica que busca responder à questão: como, de fato, explicar o impacto social
          e comercial da representatividade negra no seu contexto mercadológico? Através de uma ampla pesquisa
          bibliográfica, que inclui autores renomados e os principais sites de cultura pop da atualidade, pôde-se
          analisar tal impacto, assim como levantar a relevância comercial do filme para a indústria cinematográfica,
          compreender sua importância dentro de uma perspectiva social e verificar a pertinência do uso da cultura
          afro-americana em sua comunicação reverberada no espaço digital. Projeto produzido por Rodrigo Sérgio Ferreira
          de Paiva, consultor de marketing e publicitário formado pela UNICAP – Universidade Católica de Pernambuco.
        </BannerP>

        <BannerButtonWrapper>
          <Button to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}>
            Comprar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerButtonWrapper>
      </BannerContent>
    </BannerContainer>
  )
};
