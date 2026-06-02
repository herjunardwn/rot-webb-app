import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/video-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import VideosList from "@/components/fragments/VideosList";
import Button from "@/components/elements/Button";

export default function Video() {
  return (
    <>
      <Helmet>
        <title>Video | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <VideosList />
      {/* CTA Youtube */}
      <section className='relative mx-4 lg:mx-auto lg:container py-12 px-6 text-center border border-neonPink/20 bg-mainBg rounded-xl mb-10 overflow-hidden'>
        {/* Glow Background */}
        <div className='absolute -top-24 -right-24 w-64 h-64 bg-neonPink/12 blur-3xl rounded-full'></div>
        <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-punkPink/20 blur-3xl rounded-full'></div>

        {/* Content */}
        <div className='relative z-10'>
          <span className='text-neonPink uppercase tracking-[0.3em] text-sm font-heading'>
            More Content
          </span>

          <h2 className='font-heading text-3xl lg:text-5xl mx-auto rounded-xs uppercase my-4 bg-punkPink md:w-80 w-52'>
            Want More Videos?
          </h2>

          <p className='max-w-2xl mx-auto text-sm md:text-lg font-body text-white/70 mb-10'>
            Check out our latest videos and explore more on our YouTube channel.
          </p>
          <Button url='https://youtube.com/@rememberoftodayid'>
            Visit YouTube Channel
          </Button>
        </div>
      </section>
    </>
  );
}
