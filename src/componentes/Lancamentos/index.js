import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Lancamentos.css";

export default () => {
  return (
    <div className="lancamentos">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
        >
            <SwiperSlide><img className="lancamentos__imagem" src="/imagens/carrossel1.png" alt="fromis_9: from our memento box" /></SwiperSlide>
            <SwiperSlide><img className="lancamentos__imagem" src="/imagens/twicebanner.png" alt="Ver imagem da esquerda" /></SwiperSlide>
            <SwiperSlide><img className="lancamentos__imagem" src="/imagens/loonabanner.png" alt="Ver imagem da direita" /></SwiperSlide>
        </Swiper>
    </div>
  );
};
