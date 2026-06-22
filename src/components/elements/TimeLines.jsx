export default function TimeLines() {
  const timeline = [
    {
      year: "2011",
      title: "Band Formation",
      desc: "Remember of Today was officially formed and began writing original songs.",
    },
    {
      year: "2013",
      title: "First Release",
      desc: "Released their early material and started introducing their music to a wider audience.",
    },
    {
      year: "2017",
      title: "Breakthrough Songs",
      desc: "Several songs gained significant attention and helped grow the band's fanbase.",
    },
    {
      year: "2020",
      title: "New Chapter",
      desc: "Continued releasing new music and reaching listeners through streaming platforms.",
    },
    {
      year: "Today",
      title: "15 Years Journey",
      desc: "Still creating music, performing live, and celebrating over a decade of memories with fans.",
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
              className='relative w-[260px] flex-shrink-0 text-center'
            >
              {/* Dot */}
              <div className='relative z-10 w-5 h-5 rounded-full bg-neonPink mx-auto mt-[38px]'></div>

              {/* Year */}
              <span className='block mt-6 text-neonPink font-heading text-2xl'>
                {item.year}
              </span>

              {/* Card */}
              <div className='mt-6 border border-white/10 rounded-xl bg-mainBg p-6 backdrop-blur-sm'>
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
