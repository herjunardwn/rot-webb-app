import { Link } from "react-router-dom";

export default function Button({ url, children }) {
  const isExternal = url.startsWith("http");
  const className =
    "inline-flex items-center gap-3 px-5 py-2.5 border border-neonPink text-neonPink uppercase font-heading rounded-full tracking-wider transition-all duration-300 hover:bg-neonPink hover:text-black hover:shadow-[0_0_30px_rgba(255,79,139,0.35)]";

  if (isExternal) {
    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  );
}
