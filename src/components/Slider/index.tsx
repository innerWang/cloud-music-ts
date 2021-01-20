import { memo, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { SliderContainer, SliderContentContainer } from './style';

SwiperCore.use([Pagination, Navigation, Autoplay]);

interface IProps {
  slides: APIS.IBannerList;
}

const Slider: FC<IProps> = ({ slides }) => {
  return (
    <SliderContainer>
      <Swiper
        navigation
        loop
        tag="section"
        wrapperTag="ul"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.encodeId}
            tag="li"
            style={{
              backgroundImage: `url(${
                slide.imageUrl + '?imageView&blur=40x20'
              })`,
            }}
          >
            <SliderContentContainer>
              <img src={slide.imageUrl} alt={slide.imageUrl} />
            </SliderContentContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default memo(Slider);
