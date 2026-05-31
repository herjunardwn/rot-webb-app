import SectionTitle from "@/components/elements/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Card from "@/components/fragments/Card";
import { latestRelease } from "@/lib/latestRelease";
import "swiper/css";

export default function LatestRelease() {
  return (
    <section
      aria-label='Latest Release'
      className='container mx-auto px-4 py-10'
    >
      <SectionTitle title='Latest Updates' />
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
        {latestRelease.map((latest) => (
          <SwiperSlide>
            <Card
              key={latest.id}
              title={latest.title}
              artis={latest.artist}
              image={latest.image}
              links={latest.links}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
