import { Link } from "react-router-dom";
export default function ButtonLink({ btnName, className = "" }) {
  return (
    <Link
      to='/links'
      className={`border hover:bg-neonPink py-2 px-4 rounded-full text-white font-bold font-body md:text-md text-sm ${className}`}
    >
      {btnName}
    </Link>
  );
}
