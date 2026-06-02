export default function Button({ url, children }) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-3 px-5 py-2.5 border border-neonPink text-neonPink uppercase font-heading rounded-full tracking-wider transition-all duration-300 hover:bg-neonPink hover:text-black hover:shadow-[0_0_30px_rgba(255,79,139,0.35)]'
    >
      {children}
    </a>
  );
}
