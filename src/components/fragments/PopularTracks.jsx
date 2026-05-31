import SectionTitle from "@/components/elements/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Card from "@/components/fragments/Card";
import { popularRelease } from "@/lib/popularRelease";
import "swiper/css";

export default function popularTracks() {
  return (
    <section
      aria-label='Popular Tracks'
      className='container mx-auto px-4 py-10'
    >
      <SectionTitle title='Popular Tracks' />
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={2.2}
        breakpoints={{
          624: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        spaceBetween={20}
        className='w-full px-4'
      >
        {popularRelease.map((popular) => (
          <SwiperSlide>
            <Card
              key={popular.id}
              title={popular.title}
              artis={popular.artist}
              image={popular.image}
              links={popular.links}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
