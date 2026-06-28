import { FaHeart } from "react-icons/fa";
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiYoutubemusic, SiApplemusic } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "/ROT.svg";
import bg from "@/assets/bg-footer-2.webp";

const socials = [
  {
    icon: <FaYoutube size={22} />,
    href: "https://www.youtube.com/channel/UCHATPpUkr-LS5JasTYQvR4Q",
    label: "YouTube",
  },
  {
    icon: <FaSpotify size={22} />,
    href: "https://open.spotify.com/intl-id/artist/64Vp34MYbR0NRjkveSuZMY",
    label: "Spotify",
  },
  {
    icon: <SiYoutubemusic size={22} />,
    href: "https://music.youtube.com/@rememberoftodayid",
    label: "YouTube Music",
  },
  {
    icon: <SiApplemusic size={22} />,
    href: "https://music.apple.com/us/artist/remember-of-today/1023649506",
    label: "Apple Music",
  },
  {
    icon: <FaInstagram size={22} />,
    href: "https://instagram.com/rememberoftoday_",
    label: "Instagram",
  },
  {
    icon: <FaThreads size={22} />,
    href: "https://www.threads.com/@rememberoftoday_?xmt=AQG0rA55UxwBzDDZpvVm7MB9fAREC8ITYPr4e7JmMt0grfI",
    label: "Threads",
  },
  {
    icon: <FaTiktok size={22} />,
    href: "https://www.tiktok.com/@rememberoftoday_",
    label: "TikTok",
  },
];
export default function Footer() {
  return (
    <footer
      className='relative overflow-hidden  bg-cover bg-no-repeat bg-center pb-3 before:absolute before:inset-0'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className='absolute inset-0 bg-[linear-gradient(to_right,_rgba(0,0,0,0.7)_0%,_transparent_50%,_transparent_50%,_rgba(0,0,0,0.7)_100%)]' />
      <div className='relative mx-auto z-10 max-w-5xl px-4 py-4 sm:px-6 lg:px-8'>
        <img src={logo} alt='logo_rot' className='w-36 lg:w-48 mx-auto' />

        <ul className='mb-8 lg:mb-10 flex flex-wrap justify-center gap-4 lg:gap-6 font-body uppercase text-xs lg:text-md font-semibold'>
          <li>
            <Link
              className='text-gray-300 transition hover:text-neonPink/85 dark:text-white hover:underline'
              to='/video'
            >
              Videos
            </Link>
          </li>

          <li>
            <Link
              className='text-gray-300 transition hover:text-neonPink/85 dark:text-white hover:underline'
              to='/privacy-policy'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className='text-gray-300 transition hover:text-neonPink/85 dark:text-white hover:underline'
              to='/terms-and-conditions'
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
        {/* -------------------- */}
        <ul className='mt-10 lg:my-12 flex justify-center items-center gap-6 md:gap-8'>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='text-gray-300 hover:text-neonPink transition-colors duration-200'
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className='mt-14 text-center text-white font-heading text-xl'>
          Created with <FaHeart className='inline text-red-600' /> by Remember
          of Today
        </div>
        <div className='text-white/70 text-center text-xs mt-4 font-body'>
          &copy; 2026. All rights reserved
        </div>
      </div>
    </footer>
  );
}
