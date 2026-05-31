import AboutRot from "@/assets/about-rot.webp";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import { useEffect, useRef } from "react";
import bgAbout from "@/assets/bg-about.webp";
import ButtonCta from "../elements/ButtonCta";

export default function AboutCta() {
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
        <img
          src={bgAbout}
          className='w-full h-full object-cover'
          alt='bg-rot'
        />
      </div>
      <div className='absolute inset-0 z-10 bg-black/80' />

      {/* Content */}
      <div className='relative z-20 flex items-center lg:min-h-screen py-10'>
        <div className='container mx-auto px-4 py-4 lg:px-12'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
            {/* Content left */}
            <div className='rounded-3xl shadow-2xl shadow-punkPink/20 lg:col-span-3 overflow-hidden'>
              <img
                src={AboutRot}
                alt='About Remember Of Today'
                className='w-full lg:h-120 h-60 object-cover'
              />
            </div>

            {/* Content right */}
            <div className='text-white space-y-6 lg:col-span-2'>
              <p className='uppercase tracking-widest text-xs lg:text-md text-white font-body font-semibold'>
                BIOGRAPHY{" "}
                {/* <span className='font-extrabold text-sm text-neonPink'>
                  REMEMBER OF TODAY
                </span> */}
              </p>
              <h2 className='text-4xl lg:text-7xl font-heading font-bold leading-none'>
                <SplitText
                  text='REMEMBER OF TODAY'
                  className='text-neonPink text-5xl lg:text-7xl'
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
              </h2>
              <div className='text-base font-heading text-gray-300 leading-relaxed max-w-md'>
                <BlurText
                  text='Formed in 2011, we create songs for the moments you could never put into words.'
                  delay={200}
                  animateBy='words'
                  direction='top'
                  className='text-sm lg:text-lg mb-8 text-start font-body'
                />
              </div>
              {/* button go to biography page */}
              <a href='/biography' className='inline-block'>
                <ButtonCta
                  links={[
                    {
                      // platform: "spotify",
                      url: "/biography",
                      platform: "read Biography",
                    },
                  ]}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
