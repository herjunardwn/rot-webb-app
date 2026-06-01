import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/video-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import VideosList from "@/components/fragments/VideosList";

export default function Video() {
  return (
    <>
      <Helmet>
        <title>Video | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <VideosList />
      {/* CTA Youtube */}
      <section className='container mx-auto px-4 py-10 text-center border border-neonPink/20 bg-mainBg rounded-xl my-20'>
        <span className='text-neonPink uppercase tracking-[0.3em] text-sm font-heading'>
          More Content
        </span>

        <h2 className='font-heading text-3xl md:text-6xl uppercase mt-4 mb-6'>
          Want More Videos?
        </h2>

        <p className='max-w-2xl mx-auto font-body text-white/70 mb-10'>
          Check out our latest videos and explore more on our YouTube channel.
        </p>

        <a
          href='https://youtube.com/@rememberoftodayid'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-3 px-6 py-3 border border-neonPink text-neonPink uppercase font-heading rounded-full tracking-wider hover:bg-neonPink hover:text-black transition-all duration-300'
        >
          Visit YouTube Channel
        </a>
      </section>
    </>
  );
}
