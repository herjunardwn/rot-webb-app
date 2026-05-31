export default function TimeLines() {
  return (
    <section className='container mx-auto px-4 py-10 grid lg:grid-cols-2'>
      <ol className='relative space-y-8 before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 bg-red-500'>
        <li className='relative -ms-1.5 flex items-start gap-4'>
          <span className='size-3 shrink-0 rounded-full bg-neonPink'></span>

          <div className='-mt-2'>
            <time className='text-xs/none font-medium font-heading text-white'>
              12/02/2025
            </time>

            <h3 className='text-2xl font-bold text-neonPink font-heading'>
              Kickoff
            </h3>

            <p className='mt-0.5 text-sm font-body text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>
        <li className='relative -ms-1.5 flex items-start gap-4'>
          <span className='size-3 shrink-0 rounded-full bg-neonPink'></span>

          <div className='-mt-2'>
            <time className='text-xs/none font-medium font-heading text-white'>
              12/02/2025
            </time>

            <h3 className='text-2xl font-bold text-neonPink font-heading'>
              Kickoff
            </h3>

            <p className='mt-0.5 text-sm font-body text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>
        <li className='relative -ms-1.5 flex items-start gap-4'>
          <span className='size-3 shrink-0 rounded-full bg-neonPink'></span>

          <div className='-mt-2'>
            <time className='text-xs/none font-medium font-heading text-white'>
              12/02/2025
            </time>

            <h3 className='text-2xl font-bold text-neonPink font-heading'>
              Kickoff
            </h3>

            <p className='mt-0.5 text-sm font-body text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>
      </ol>
      <div className='bg-blue-500'>
        <img src='' alt='Gambar perform ROT' />
      </div>
    </section>
  );
}
