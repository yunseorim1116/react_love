
import styled from 'styled-components';
import { userType } from '@/type/userType';
import UserCard from '@components/common/UserCard';
import { useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가

import { Virtual, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

interface IProps {
  cardList:userType []; // 슬라이드에는 컴포넌트가 들어갑니다
}

const CustomSwiper = styled(Swiper)`
	width: 100vw;
	height: auto;

	background-color: #ffffff;

`;



const SwiperSlieder = ({ cardList }: IProps) => {
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectCoverflow])
const navigationPrevRef = useRef(null)
const navigationNextRef = useRef(null)

const slides = cardList?.map( (userInfo) => <UserCard userId={userInfo.userId} nickname={userInfo.nickname} profileImgUrl={userInfo.profileImgUrl}/>
  );


    return (<>
      <CustomSwiper
         effect={"coverflow"}
         slidesPerView={1}
         pagination={{ clickable: true }}
>
      {slides?.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}

    </CustomSwiper>
    <div style={{ display:'flex'}}>
    <div ref={navigationPrevRef} >이전</div>
    <div ref={navigationNextRef} >이후</div>
    </div>
    </>
    );
}


export default SwiperSlieder