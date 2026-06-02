import { FaInstagram } from "react-icons/fa";

export default function MemberCard({ member }) {
  return (
    <div className='relative rounded-xl overflow-hidden group border border-white/10 transition-transform duration-300 hover:scale-102'>
      <img
        src={member.image}
        alt={member.name}
        className='w-full transition-transform duration-500 group-hover:scale-105'
      />

      <div className='p-4 text-center'>
        <h3 className='font-heading text-xl lg:text-2xl text-punkPink'>
          {member.name}
        </h3>
        <p className='font-body text-xs uppercase lg:tracking-[0.2em] text-white/60'>
          {member.role}
        </p>
        {/* instagram link */}
        <a
          href={member.instagramLink}
          target='_blank'
          rel='noopener noreferrer'
          className='text-punkPink text-sm mt-2 inline-block transition-opacity duration-300 hover:opacity-60'
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
