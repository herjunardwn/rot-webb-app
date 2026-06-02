import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/biography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import photoBiography from "@/assets/biography-rot.png";
import TimeLines from "@/components/elements/TimeLines";
import Button from "@/components/elements/Button";

export default function Biography() {
  return (
    <>
      <Helmet>
        <title>Biography | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <section className='container mx-auto my-10 px-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center'>
        <div className='transform rotate-4'>
          <img
            src={photoBiography}
            alt='photo biography'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className=''>
          <span className='text-md text-white font-medium mb-2 block font-body'>
            Remember of Today
          </span>
          <h2 className='text-3xl font-bold mb-4 font-heading text-neonPink'>
            Poppunk Band From CGK
          </h2>
          <p className='text-gray-300 mb-4 font-body'>
            Formed in 2011, Remember of Today is an Indonesian pop punk band
            known for blending emotional storytelling, energetic melodies, and
            honest lyrics. Built on friendship, passion, and consistency, the
            band continues to create music that resonates with listeners through
            themes of love, struggle, hope, and everyday life.
          </p>
          <p className='text-gray-200 mb-4 font-heading text-xl lg:text-2xl italic'>
            "Songs For The Moments You Never Forget."
          </p>
          {/* button cta */}
          <div className='flex flex-row flex-wrap gap-3'>
            <Button url='https://open.spotify.com/intl-id/artist/64Vp34MYbR0NRjkveSuZMY'>
              Go To Spotify
            </Button>
            <Button url='https://youtube.com/@rememberoftodayid'>
              YouTube Channel
            </Button>
          </div>
        </div>
      </section>
      <TimeLines />
    </>
  );
}
