import anniversaryVideo from "@/assets/video/rot_anniversary.mp4";
import ShinyText from "@/components/ShinyText";
import BlurText from "@/components/BlurText";
import { useEffect, useRef } from "react";
import bgImage from "@/assets/bg-about.webp";
import Poster from "@/assets/anniversaryPoster.webp";
import Button from "../elements/Button";

export default function AnniversaryCta() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null); // ← tambah ini

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = rect.top * 0.2;
      bgRef.current.style.transform = `translateY(${-offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label='Anniversary'
      className='relative overflow-hidden lg:min-h-screen my-4 lg:my-10'
    >
      <div ref={bgRef} className='absolute z-0 inset-0 scale-110'>
        <img src={bgImage} className='w-full h-full object-cover' alt='' />
      </div>
      <div className='absolute inset-0 z-10 bg-black/83' />

      {/* Content */}
      <div className='relative z-20 flex items-center lg:min-h-screen py-10'>
        <div className='container mx-auto px-4 py-4 lg:px-12'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
            {/* Content Left */}
            <div className='text-white space-y-6 lg:col-span-2'>
              <p className='uppercase animate-pulse tracking-widest text-xs lg:text-md text-white font-body font-semibold'>
                Remember Of Today{" "}
                <span className='font-extrabold text-sm text-neonPink'>x</span>{" "}
                Indie Sejak Dini
              </p>
              <h2 className='text-5xl lg:text-7xl font-heading font-bold leading-none -mt-3'>
                <ShinyText
                  text='15th Anniversary Celebration'
                  speed={3}
                  delay={0}
                  color='#ff4f8b'
                  shineColor='#ffffff'
                  spread={-45}
                  direction='left'
                  pauseOnHover={false}
                  disabled={false}
                />
              </h2>
              <p className='text-base font-heading text-gray-300 leading-relaxed max-w-md'>
                <BlurText
                  text="A celebration of every song, every scream, every crowd singalong, and every moment we've shared together through the years."
                  delay={100}
                  animateBy='words'
                  direction='top'
                  className='text-md lg:text-lg mb-8 text-start font-body'
                />
              </p>
              <Button url='https://www.instagram.com/reel/DUAGNVmkQ6X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
                See Post On Instagram
              </Button>
            </div>
            {/* Content Right */}
            <div className='rounded-3xl mt-3 lg:mt-0 shadow-2xl shadow-punkPink/20 lg:col-span-3 overflow-hidden '>
              <video
                preload='auto'
                poster={Poster}
                loop
                controls
                playsInline
                className='w-full aspect-video object-cover object-center'
              >
                <source src={anniversaryVideo} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
