import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/biography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import photoBiography from "@/assets/biography-rot.png";
import TimeLines from "@/components/elements/TimeLines";
import Button from "@/components/elements/Button";
import MembersGrid from "@/components/fragments/MembersGrid";
import CtaSection from "@/components/fragments/CtaSection";

export default function Biography() {
  return (
    <>
      <Helmet>
        <title>Biography | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <section>
        <div className='container mx-auto my-10 px-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center'>
          <div className='transform rotate-4'>
            <img
              src={photoBiography}
              alt='photo biography'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className=''>
            <span className='text-md uppercase tracking-tight text-white font-medium mb-2 block font-body animate-pulse'>
              Remember of Today
            </span>
            <h1 className='text-5xl lg:text-7xl font-heading font-bold leading-none'>
              <SplitText
                text='Pop Punk Band From CGK!'
                className='text-neonPink text-4xl lg:text-5xl'
                delay={50}
                duration={1.25}
                ease='power3.out'
                splitType='chars'
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin='-100px'
                textAlign='start'
                showCallback
              />
            </h1>
            <p className='text-gray-300 mb-4 font-body'>
              <BlurText
                text='Formed in 2011, Remember of Today is an Indonesian pop punk band known for blending emotional storytelling, energetic melodies, and honest lyrics. Built on friendship, passion, and consistency, the band continues to create music that resonates with listeners through themes of love, struggle, hope, and everyday life.'
                delay={100}
                animateBy='words'
                direction='top'
                className='text-md lg:text-lg mb-8 text-start font-body'
              />
            </p>

            <span className='text-gray-200 inline-block mb-6 font-heading text-xl lg:text-2xl'>
              <ShinyText
                text='"Songs For The Moments You Never Forget"'
                speed={3}
                delay={0}
                color='#b73b62'
                shineColor='#ffffff'
                spread={90}
                direction='left'
                yoyo
                pauseOnHover={false}
                disabled={false}
              />
            </span>

            {/* button cta */}
            <div className='flex flex-row flex-wrap gap-3'>
              <Button url='https://open.spotify.com/intl-id/artist/64Vp34MYbR0NRjkveSuZMY'>
                Listen on Spotify
              </Button>
              <Button url='https://youtube.com/@rememberoftodayid'>
                Watch on YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TimeLines />
      </section>
      <section className='container mx-auto px-4 py-10'>
        <h2 className='font-heading text-4xl lg:text-6xl text-center mb-4'>
          <span className='text-neonPink'>Current</span> Lineup
        </h2>

        <p className='text-center font-body text-white/60 mb-12'>
          The people behind Remember of Today.
        </p>

        {/* Members Grid */}
        <MembersGrid />
      </section>

      {/* cta contact */}
      <CtaSection
        subHeading='Contact Management'
        heading='Booking & Business'
        description="Let's talk about shows, collaborations, media appearances, and other opportunities."
        url='/contact'
        buttonText='Get In Touch'
      />
    </>
  );
}
