import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner1 from "@/assets/banner/1.png";
import banner2 from "@/assets/banner/2.png";
// import "swiper/css/pagination";

export default function SwiperBanner() {
  return (
    <Swiper
      className='w-full mb-4 md:mb-0'
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      // pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src={banner1} alt='banner-1' className='w-full h-auto block' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt='banner-2' className='w-full h-auto block' />
      </SwiperSlide>
    </Swiper>
  );
}
