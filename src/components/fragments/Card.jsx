import ButtonCta from "../elements/ButtonCta";

export default function Card({ id, title, artis, image, links = [] }) {
  return (
    <div className='block' key={id}>
      <div className='relative'>
        <img
          alt={title}
          src={image}
          className='h-56 w-full rounded-lg object-cover sm:h-64 lg:h-96'
        />
        <div className='absolute inset-0 rounded-lg bg-black opacity-0 hover:opacity-50 transition-opacity duration-300' />
      </div>

      <div className='mt-4 sm:flex sm:items-center sm:justify-start sm:gap-4'>
        <strong className='font-medium text-sm font-heading'>{artis}</strong>
        <span className='hidden sm:block sm:h-px sm:w-5 sm:bg-neonPink'></span>
        <p className='mt-0.5 opacity-60 sm:mt-0 text-xs md:text-sm font-heading'>
          {title}
        </p>
      </div>
      <ButtonCta links={links} />
    </div>
  );
}
