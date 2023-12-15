"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "./Card";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[EffectCreative, Autoplay]}
      effect={"creative"}
      className="mt-12 md:mt-20 md:h-[400px]"
      autoplay={{
        delay: 10000,
      }}
      creativeEffect={{
        prev: {
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      }}
      breakpoints={{
        1024: {
          creativeEffect: {
            prev: {
              translate: [0, 0, 0],
            },
            next: {
              translate: ["25%", "15%", 0],
            },
            limitProgress: 1,
          },
        },
      }}
    >
      <SwiperSlide className="group">
        <Card author="Assinante VAROS">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível. Conteúdos preparados para trazer mais segurança, independente
          do seu nível.Conteúdos preparados para trazer mais segurança,
          independente do seu nível.
        </Card>
      </SwiperSlide>

      <SwiperSlide className="group">
        <Card author="Assinante VAROS">
          Eu acompanho vários gestores de fundo e educadores financeiros. Tu de
          longe és um dos que mais contribui para minha construção de
          conhecimento. A forma que colocas coisas que outras pessoas fazem
          parecer complexas de uma forma super simples e ginal. Parabéns! E
          continue.
        </Card>
      </SwiperSlide>

      <SwiperSlide className="group">
        <Card author="Assinante VAROS">
          Nunca vi algo tão completo que nem o de vocês. E olha que esses 11
          anos que tô no MF já assinei muita casa de análise. Nada chega perto
          do trabalho seu e da sua equipe.
        </Card>
      </SwiperSlide>
    </Swiper>
  );
}
