import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

export default function MusicVideo({ title, src, videoTitle }) {
  return (
    <section
      aria-label='Music Video'
      className='container mx-auto mt-5 mb-0 lg:my-10 px-4'
    >
      <div className='block uppercase text-center text-neonPink font-medium'>
        <SplitText
          text='New Single'
          className='text-neonPink text-xs lg:text-lg font-body'
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
      </div>

      <h2 className='flex justify-center mb-6'>
        {/* {title} */}
        <BlurText
          text={title}
          delay={200}
          animateBy='words'
          direction='top'
          className='font-heading text-2xl lg:text-4xl'
        />
      </h2>
      <div className='w-full aspect-video rounded-lg overflow-hidden'>
        <iframe
          src={src}
          title={videoTitle}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full'
        />
      </div>
    </section>
  );
}
