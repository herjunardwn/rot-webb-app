import SectionTitle from "@/components/elements/SectionTitle";
import { Event } from "@/lib/event";
import { MapPin, Clock3 } from "lucide-react";

export default function ShowEvents() {
  return (
    <section aria-label='Show Events' className='container mx-auto px-4 py-10'>
      <SectionTitle title='Show Events' />
      {Event.length === 0 ? (
        <div className='py-24 text-center'>
          <p className='font-heading text-3xl uppercase text-white/40'>
            No Upcoming Shows
          </p>

          <p className='mt-3 font-body text-sm tracking-[0.25em] text-white/50 uppercase'>
            Stay tuned for upcoming events
          </p>
        </div>
      ) : (
        <div className='flex flex-col justify-center gap-6'>
          {Event.map((event) => (
            <article
              key={event.id}
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-neonPink/40 hover:shadow-2xl '
            >
              <div className='grid grid-cols-1 lg:grid-cols-[80px_320px_1fr_180px]'>
                {/* Date */}
                <div className='flex items-center justify-center border-b border-white/10 bg-mainBlack/50 p-4 lg:border-r lg:border-b-0'>
                  <time
                    className='flex items-center gap-1 lg:rotate-180 lg:gap-3 lg:[writing-mode:vertical-lr]'
                    dateTime={`${event.year}-${event.monthNumber}-${event.date}`}
                  >
                    {/* <span className='h-px w-10 bg-white/10 lg:h-16 lg:w-px'></span>{" "} */}
                    <span className='text-lg font-heading text-white'>
                      {event.day},{" "}
                    </span>
                    <span className='text-lg font-heading text-white'>
                      {event.date}
                    </span>
                    <span className='text-lg font-heading uppercase text-neonPink'>
                      {event.month}
                    </span>
                    <span className='text-lg font-heading uppercase text-white'>
                      {event.year}
                    </span>
                    {/* <span className='h-px w-10 bg-white/10 lg:h-16 lg:w-px'></span> */}
                  </time>
                </div>

                {/* Image */}
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full brightness-85 group-hover:brightness-95 h-full object-cover object-top transition duration-500 group-hover:scale-105'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent'></div>

                  {/* Badge */}
                  <div className='absolute left-4 top-4'>
                    <span className='rounded-full border border-mainBlack/40 bg-white/20 px-3 py-1 text-[10px] font-body font-bold uppercase tracking-[0.25em] text-mainBlack backdrop-blur-md backdrop-saturate-150 shadow-[0_0_20px_rgba(255,0,128,0.15)]'>
                      {event.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className='flex flex-col justify-center space-y-5 p-6 lg:p-10'>
                  <div>
                    {/* <MapPin size={16} className='text-neonPink' /> */}
                    <p className='mb-2 text-xs uppercase tracking-[0.2em] text-white/40 font-body'>
                      {event.location}
                    </p>

                    <h3 className='font-heading text-2xl text-neonPink lg:text-4xl'>
                      {event.title}
                    </h3>
                  </div>

                  <div className='flex flex-wrap items-center gap-4 text-sm text-white/50 font-body'>
                    <span>{event.venue}</span>
                    <span className='h-1 w-1 rounded-full bg-neonPink/50'></span>
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* CTA */}
                {event.status === "open" && (
                  <div className='flex items-end justify-start p-6 lg:items-center lg:justify-center'>
                    <a
                      href='#'
                      className='inline-flex whitespace-nowrap items-center justify-center rounded-full border border-neonPink hover:border-white bg-neonPink px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105 hover:bg-white font-body'
                    >
                      Get Ticket
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
