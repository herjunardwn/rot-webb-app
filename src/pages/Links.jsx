import { Helmet } from "react-helmet-async";
import Plasma from "@/components/Plasma";
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  // FaApple,
  FaGlobe,
  FaThreads,
} from "react-icons/fa6";
import avatar from "@/assets/avatar-rot.svg";

const links = [
  {
    label: "Selayaknya - Single Terbaru",
    sub: "Dengarkan sekarang di Spotify",
    icon: <FaSpotify />,
    href: "https://open.spotify.com/intl-id/track/6hCPtPPZJzg2i78Ibi3wiX?si=cc0268e28f314b95",
    highlight: true,
  },
  {
    label: "Selayaknya - Accoustic Session",
    sub: "Dengarkan sekarang di YouTube",
    icon: <FaYoutube />,
    href: "https://youtu.be/NqCX7ezJ1AY?si=geV0zkLIRMStAPcX",
    highlight: true,
  },
  {
    label: "Spotify",
    sub: "Semua lagu & playlist",
    icon: <FaSpotify />,
    href: "https://open.spotify.com/intl-id/artist/64Vp34MYbR0NRjkveSuZMY",
  },
  {
    label: "YouTube",
    sub: "Music video & live performance",
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCHATPpUkr-LS5JasTYQvR4Q",
  },
  // {
  //   label: "Apple Music",
  //   sub: "Tersedia di Apple Music",
  //   icon: <FaApple />,
  //   href: "#",
  // },
  {
    label: "Instagram",
    sub: "Update photo & video",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/rememberoftoday_/",
  },
  {
    label: "TikTok",
    sub: "Short clips & teaser",
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@rememberoftoday_",
  },
  {
    label: "Threads",
    sub: "Obrolan santai",
    icon: <FaThreads />,
    href: "https://www.threads.com/@rememberoftoday_?xmt=AQG0xCRtgxOrFquKuOCRsRgg7PYzEGBMzBAaRfM5Ih3qaqw",
  },
  {
    label: "Official Website",
    sub: "Profil, diskografi & event",
    icon: <FaGlobe />,
    href: "/",
  },
];

export default function Links() {
  return (
    <>
      <Helmet>
        <title>Links | Remember of Today</title>
      </Helmet>
      <div className='fixed inset-0 overflow-y-auto'>
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Plasma
            color='#ff4f8b'
            speed={0.5}
            direction='forward'
            scale={0.6}
            opacity={1}
            mouseInteractive={false}
          />
        </div>

        <div className='relative z-10 flex flex-col items-center px-4 py-10'>
          <img
            src={avatar}
            alt='ROT'
            className='w-24 h-auto rounded-full object-cover border border-white/20'
          />
          <h1 className='font-heading text-white text-2xl font-bold tracking-wide uppercase mb-1 mt-3 '>
            Remember <span className='text-neonPink'>Of</span> Today
          </h1>
          <p className='font-body text-white/50 text-xs mb-10 text-center'>
            Poppunk band from CGK | Est. 2011
          </p>

          {/* Links */}
          <div className='w-full max-w-sm flex flex-col gap-3'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  link.highlight
                    ? "bg-white/20 border-neonPink/60 backdrop-blur-md"
                    : "bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15"
                }`}
              >
                <span className='text-white text-xl'>{link.icon}</span>
                <div className='flex flex-col flex-1'>
                  <span className='font-heading text-white text-sm font-medium'>
                    {link.label}
                  </span>
                  <span className='text-white/50 text-xs font-body'>
                    {link.sub}
                  </span>
                </div>
                {link.highlight && (
                  <span className='font-body text-xs px-2 py-1 rounded-full bg-white text-neonPink font-medium'>
                    Baru
                  </span>
                )}
              </a>
            ))}
          </div>

          <p className='text-white/50 font-heading text-sm mt-12'>
            &copy; 2026 REMEMBER OF TODAY
          </p>
        </div>
      </div>
    </>
  );
}
