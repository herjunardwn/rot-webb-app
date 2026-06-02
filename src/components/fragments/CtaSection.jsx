import Button from "@/components/elements/Button";

export default function CtaSection({
  subHeading,
  heading,
  description,
  url,
  buttonText,
}) {
  return (
    <section className='relative mx-4 lg:mx-auto lg:container py-12 px-6 text-center border border-neonPink/20 bg-mainBg rounded-xl mb-10 overflow-hidden'>
      {/* Glow Background */}
      <div className='absolute -top-24 -right-24 w-64 h-64 bg-neonPink/12 blur-3xl rounded-full'></div>
      <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-punkPink/20 blur-3xl rounded-full'></div>

      {/* CTA */}
      <div className='relative z-10'>
        <span className='text-neonPink uppercase tracking-[0.3em] text-sm font-heading'>
          {subHeading}
        </span>

        <h2 className='font-heading text-3xl lg:text-5xl mx-auto rounded-xs uppercase my-4 bg-punkPink md:w-80 w-52'>
          {heading}
        </h2>

        <p className='max-w-2xl mx-auto text-sm md:text-lg font-body text-white/70 mb-10'>
          {description}
        </p>
        <Button url={url}>{buttonText}</Button>
      </div>
    </section>
  );
}
