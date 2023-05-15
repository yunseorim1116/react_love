import styled from "styled-components";
import { userType } from "@/type/userType";
import UserCard from "@components/common/UserCard";
import { useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import SwiperClass from "swiper";
import { Virtual, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import instance from "@/utils/axios";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperButtonNext from "@components/common/SwiperButtonNext ";
import Button from "@components/common/Button";

interface IProps {
  cardList: userType[]; // 슬라이드에는 컴포넌트가 들어갑니다
}

const CustomSwiper = styled(Swiper)`
  width: 100vw;
  height: auto;

  background-color: #ffffff;
`;

const SwiperSlieder = ({ cardList }: IProps) => {
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectCoverflow]);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>();
  const [pageIndex, setPageIndex] = useState<number>(0);

  const slides = cardList?.map((userInfo) => (
    <UserCard
      userId={userInfo.userId}
      nickname={userInfo.nickname}
      profileImgUrl={userInfo.profileImgUrl}
    />
  ));

  const handleSendLike = async (content: userType) => {
    const { userId } = content;
    const bodyInfo = { targetUserId: userId };

    const res = await instance.patch("/affinity/like", bodyInfo);
    console.log(res);
  };

  const handleSendDislike = async (content: userType) => {
    const { userId } = content;
    const bodyInfo = { targetUserId: userId };
    const res = await instance.patch("/affinity/dislike", bodyInfo);
    console.log(res);
  };

  const swiperPrams = {
    slidesPerView: 1,
    onBeforeInit: (swiper: SwiperClass) => {
      if (typeof swiper.params.navigation !== "boolean") {
        // swiper.params.navigation!.prevEl = navigationPrevRef.current;
        // swiper.params.navigation!.nextEl = navigationNextRef.current;
        // swiper.navigation.update();
      }
    },
    loop: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onSlideChange: (e: SwiperClass) => setPageIndex(e.activeIndex),
    onSwiper: (swiper: any) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <>
      <CustomSwiper {...swiperPrams}>
        {slides?.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                buttonText="좋아요"
                handleClickFunction={() => {
                  handleSendLike(slideContent.props);
                }}
              />
              <Button
                buttonText="시러요"
                handleClickFunction={() => {
                  handleSendDislike(slideContent.props);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div ref={navigationPrevRef}> ◀ </div>
        <div ref={navigationNextRef}> ▶</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div onClick={() => swiperRef.current.slidePrev()}>이전</div>
        <div onClick={() => swiperRef.current.slideNext()}>다음</div>
      </div>
    </>
  );
};

export default SwiperSlieder;
