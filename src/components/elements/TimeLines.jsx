export default function TimeLines() {
  const timeline = [
    {
      year: "2011",
      title: "Band Formation",
      desc: "Too much feeling, not enough words. So we started a band.",
    },
    {
      year: "2014",
      title: "Pergi Hilang Dan Lupakan",
      desc: "One song. Thousands of people who finally felt understood. Still the most streamed to this day.",
    },
    {
      year: "2016",
      title: "Keeping It Going",
      desc: "More singles, more stories. Proof they were never a one-song band.",
    },
    {
      year: "2018",
      title: "Lelah",
      desc: "Sometimes the most honest thing you can say is I'm tired.",
    },
    {
      year: "2021",
      title: "Terbang Kembali Album",
      desc: "A decade in, their first full album. Everything they felt - finally in one place.",
    },
    {
      year: "Today",
      title: "15 Years Journey",
      desc: "Still here. Still making music. Because you never stopped listening.",
    },
  ];

  return (
    <section className='container mx-auto px-4 py-10'>
      <h2 className='text-2xl lg:text-4xl font-heading text-white text-center'>
        Timeline of <span className='text-neonPink'>Remember of Today</span>
      </h2>

      {/* Scroll Area */}
      <div className='overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neonPink/40'>
        <div className='relative flex gap-8 min-w-max px-2'>
          {/* Main Line */}
          <div className='absolute top-12 left-0 w-full h-[2px] bg-white/10'></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className='relative w-[260px] flex-shrink-0 text-center flex flex-col'
            >
              {/* Dot */}
              <div className='relative z-10 w-5 h-5 rounded-full bg-neonPink mx-auto mt-[38px]'></div>

              {/* Year */}
              <span className='block mt-6 text-neonPink font-heading text-2xl'>
                {item.year}
              </span>

              {/* Card */}
              <div className='mt-6 border border-white/10 rounded-xl bg-mainBg p-6 backdrop-blur-sm flex-1'>
                <h3 className='font-heading text-xl text-white mb-3 uppercase'>
                  {item.title}
                </h3>
                <p className='text-white/60 text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
