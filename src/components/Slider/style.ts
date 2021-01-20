import baseStyle from 'assets/baseStyle';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  li {
    background-repeat: no-repeat;
    background-size: 6000px;
    background-position: center;
  }

  .swiper-container {
    .swiper-button-prev {
      left: 120px;
      &::after {
        color: #fff2ea;
      }
    }
    .swiper-button-next {
      right: 120px;
      &::after {
        color: #fff2ea;
      }
    }
    .swiper-pagination-bullets {
      > .swiper-pagination-bullet {
        margin: 0 16px;
        background: #fff2ea;
        opacity: 0.8;

        &:hover {
          background: ${baseStyle['theme-color']};
        }
      }

      .swiper-pagination-bullet-active {
        background: ${baseStyle['theme-color']};
      }
    }

    @media screen and (max-width: 1200px) {
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
`;

export const SliderContentContainer = styled.div`
  margin: 0 auto;
  width: ${baseStyle['main-width']};
  text-align: center;
  img {
    height: 285px;
    vertical-align: middle;
  }
`;
