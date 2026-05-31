export default function BannerPage({ banner }) {
  return (
    <section aria-label='Discography Banner' className='w-full'>
      <img
        src={banner}
        alt='Discography'
        className='w-full h-full object-cover bg-mainBlack'
      />
    </section>
  );
}
