import Image from 'next/image';
import Slider from 'react-slick';
import { FC, useRef, useState } from 'react';
import { useBannersQuery } from 'src/query/useHomeQuery';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Text } from '~components/common';

interface Props {}

const MainBanner: FC<Props> = () => {
  const { data, slideIndex, setSlideIndex } = useMainBanner();
  const slider = useRef<Slider>(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current: number) => setSlideIndex(current + 1),
  };

  return (
    <Container>
      <Slider ref={slider} {...settings}>
        {data &&
          data.map((item, index) => (
            <ImageItem key={item.linkId + index} className="main-banner" bgColor={item.bannerNameColor}>
              <div className="banner-area wrapper">
                <Image src={'https:' + item.imageUrl} alt={item.bannerName} layout="fill" objectFit="contain" />
              </div>
            </ImageItem>
          ))}
      </Slider>
      <div className="pagination wrapper">
        <div>
          <Text>{slideIndex}</Text>
          <Text>/</Text>
          <Text>{data?.length}</Text>
        </div>
      </div>
    </Container>
  );
};

// hooks
function useMainBanner() {
  const [slideIndex, setSlideIndex] = useState(1);
  const { data } = useBannersQuery({ bannerType: 'T' });
  return { data, slideIndex, setSlideIndex };
}

// styled
const Container = styled.div`
  position: relative;

  .wrapper {
    margin: 0 auto;
    min-width: 768px;
    max-width: 1080px;
    @media only screen and (max-width: 768px) {
      min-width: 360px;
    }
  }

  .pagination {
    position: relative;
    > div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      height: 24px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.3);
      bottom: 12px;
      right: 20px;
      > p {
        opacity: 0.3;
        padding-left: 4px;
        &:first-of-type {
          opacity: 1;
          padding: 0;
        }
      }
    }
  }
`;

const ImageItem = styled.div<{ bgColor: string }>`
  position: relative;
  width: 100%;
  background: ${({ bgColor }) => bgColor};

  .banner-area {
    position: relative;
    height: 500px;
  }
`;

export default MainBanner;
