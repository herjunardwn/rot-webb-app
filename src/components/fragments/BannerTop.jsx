import SwiperBanner from "@/components/elements/SwiperBanner";
import CurvedLoop from "@/components/CurvedLoop";

export default function BannerTop() {
  return (
    <section aria-label='Banner'>
      <SwiperBanner />
      <CurvedLoop
        marqueeText=' remember of today ✦'
        speed={2.5}
        curveAmount={0}
        direction='right'
        interactive
        className='custom-text-style'
      />
      <CurvedLoop />
    </section>
  );
}
