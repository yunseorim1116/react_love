import { useSwiper } from "swiper/react";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
};
export default SwiperButtonNext;
