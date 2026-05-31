import { FaSpotify, FaYoutube } from "react-icons/fa";

const platformIcon = {
  youtube: <FaYoutube size={15} />,
  spotify: <FaSpotify size={15} />,
};

export default function ButtonCta({ links = [] }) {
  return (
    <div className='mt-3 flex flex-wrap gap-2'>
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1 px-2.5 lg:px-3 py-1 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition-all'
        >
          {platformIcon[link.platform]}
          <span className='capitalize md:text-xs text-[10px] font-body'>
            {link.platform}
          </span>
        </a>
      ))}
    </div>
  );
}
